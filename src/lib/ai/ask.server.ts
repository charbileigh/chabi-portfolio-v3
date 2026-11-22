import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { buildInstructions } from "./portfolio-context";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "./run-id.server";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1";
const MODEL = "openai/gpt-6-astra";
const MAX_MESSAGES = 20;
const MAX_CHARS = 600;

function jsonError(status: number, message: string) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function textOf(message: UIMessage) {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("")
    .trim();
}

export async function handleAsk(request: Request): Promise<Response> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) return jsonError(500, "The assistant isn’t configured yet.");

  let body: { messages?: unknown };
  try {
    body = (await request.json()) as { messages?: unknown };
  } catch {
    return jsonError(400, "Invalid request.");
  }
  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return jsonError(400, "Please type a question.");
  }

  // Public endpoint: keep only text parts of user/assistant turns and cap size.
  const messages = (body.messages as UIMessage[])
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && Array.isArray(m.parts))
    .slice(-MAX_MESSAGES)
    .map((m) => ({
      ...m,
      parts: m.parts.filter((p) => p.type === "text").map((p) => ({ ...p })),
    })) as UIMessage[];

  const last = messages.at(-1);
  if (!last || last.role !== "user" || !textOf(last)) return jsonError(400, "Please type a question.");
  if (messages.some((m) => m.role === "user" && textOf(m).length > MAX_CHARS)) {
    return jsonError(400, `Please keep questions under ${MAX_CHARS} characters.`);
  }

  const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));
  const provider = createOpenAI({
    baseURL: GATEWAY_URL,
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  const result = streamText({
    model: provider.responses(MODEL),
    instructions: buildInstructions(),
    messages: await convertToModelMessages(messages),
    abortSignal: request.signal,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
    onError: ({ error }) => {
      console.error("Ask me guide error", error);
    },
  });

  return withLovableAiGatewayRunIdHeader(
    result.toUIMessageStreamResponse({
      originalMessages: messages,
      sendReasoning: false,
      onError: (error) => {
        const status = (error as { statusCode?: number })?.statusCode;
        if (status === 429) return "I’m getting a lot of questions right now. Please try again in a moment.";
        if (status === 402) return "The assistant is resting for now. You can email me at chabi.seopa@gmail.com.";
        return "Something went wrong answering that. You can email me at chabi.seopa@gmail.com.";
      },
    }),
    runIdFetch,
  );
}
