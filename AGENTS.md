<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- Portfolio copy and facts live in `src/content/` (portfolio.ts, recruiter.ts, guide-topics.ts); components render from there and the AI guide's fact sheet is built from the same modules, so edit facts in one place only.
- The "Ask me" AI guide streams from the public server route `/api/public/ask` (handler in `src/lib/ai/ask.server.ts`); it validates and caps input because the route is unauthenticated, and answers only from the generated fact sheet.
- Scroll-reveal hides content only after JS adds `reveal-ready` to `<html>`, so pages stay readable without JS or with reduced motion.
- The CV is an HTML route (`/cv`) printed to PDF by the browser; print-only tweaks use the `no-print` class and `print:` variants.
