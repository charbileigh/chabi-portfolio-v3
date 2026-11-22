import { createFileRoute } from "@tanstack/react-router";

import { handleAsk } from "@/lib/ai/ask.server";

// Public "Ask me" endpoint for portfolio visitors. Input is validated and capped in handleAsk.
export const Route = createFileRoute("/api/public/ask")({
  server: { handlers: { POST: ({ request }) => handleAsk(request) } },
});
