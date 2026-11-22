import { useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { Conversation, ConversationContent, ConversationScrollButton } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import { suggestedQuestions } from "@/content/portfolio";
import { FlowerMark } from "./FlowerMark";
import { Reveal } from "./Reveal";

export function AskMe() {
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/public/ask" }), []);
  const { messages, sendMessage, status, stop, setMessages, error } = useChat({
    transport,
    onError: () => toast.error("I couldn’t answer that just now. Please try again in a moment."),
  });
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    // Keep the composer focused after each answer, but don't steal focus on page load.
    if (status === "ready" && messages.length > 0) textareaRef.current?.focus({ preventScroll: true });
  }, [status, messages.length]);

  const ask = (q: string) => {
    const value = q.trim();
    if (!value || busy) return;
    void sendMessage({ text: value });
    setText("");
  };

  return (
    <section id="ask" aria-labelledby="ask-title" className="border-t">
      <div className="wrap grid gap-12 py-20 md:grid-cols-[1fr_1.8fr] md:gap-20 md:py-28">
        <Reveal>
          <p className="folio">
            <span className="text-primary">03</span> / Ask me
          </p>
          <h2 id="ask-title" className="display mt-3 text-[clamp(2.7rem,4.6vw,4rem)]">
            Ask about my <em className="text-primary">background</em>
          </h2>
          <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
            An AI guide that answers from what’s on this site — my roles, research, tools and projects. For anything else,
            email me.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex h-[540px] flex-col overflow-hidden rounded-xl border bg-card shadow-card">
            <div className="flex items-center justify-between border-b px-5 py-3">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-full bg-blush">
                  <FlowerMark size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight">Chabi’s guide</p>
                  <p className="text-[0.7rem] text-muted-foreground">Answers in my words, from my portfolio</p>
                </div>
              </div>
              {messages.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    stop();
                    setMessages([]);
                  }}
                  className="text-muted-foreground"
                >
                  <RotateCcw /> Start over
                </Button>
              )}
            </div>

            <Conversation className="flex-1">
              <ConversationContent className="gap-6 px-5 py-6">
                {messages.length === 0 ? (
                  <div className="flex h-full flex-col justify-end gap-4 pt-10">
                    <p className="font-serif text-2xl leading-snug tracking-[-0.02em]">
                      Hi! Ask me anything about my work — or try one of these:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((q) => (
                        <Button key={q} variant="petal" size="pill" onClick={() => ask(q)}>
                          {q}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  messages.map((m) => (
                    <Message key={m.id} from={m.role}>
                      <MessageContent className="text-[0.95rem] leading-relaxed group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground">
                        {m.parts.map((part, i) =>
                          part.type === "text" ? (
                            m.role === "assistant" ? (
                              <MessageResponse key={i}>{part.text}</MessageResponse>
                            ) : (
                              <p key={i}>{part.text}</p>
                            )
                          ) : null,
                        )}
                      </MessageContent>
                    </Message>
                  ))
                )}
                {status === "submitted" && (
                  <Message from="assistant">
                    <MessageContent>
                      <Shimmer className="text-sm">Thinking it over…</Shimmer>
                    </MessageContent>
                  </Message>
                )}
                {error && status === "error" && (
                  <p className="text-sm text-destructive">That one didn’t go through. Please try again.</p>
                )}
              </ConversationContent>
              <ConversationScrollButton />
            </Conversation>

            <div className="border-t bg-background/60 p-3">
              <PromptInput onSubmit={(msg) => ask(msg.text || text)}>
                <PromptInputTextarea
                  ref={textareaRef}
                  value={text}
                  maxLength={600}
                  onChange={(e) => setText(e.currentTarget.value)}
                  placeholder="What testing tools do you use?"
                  aria-label="Ask a question about Chabi"
                />
                <PromptInputFooter>
                  <PromptInputTools>
                    <span className="px-2 text-[0.7rem] text-muted-foreground">AI-powered · may be imperfect</span>
                  </PromptInputTools>
                  <PromptInputSubmit status={status} onStop={stop} disabled={!busy && !text.trim()} />
                </PromptInputFooter>
              </PromptInput>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
