# chabi.lol — portfolio v3

Portfolio of Mmasechaba Francesca Seopa (Chabi), Technical Systems Analyst in Johannesburg.

## What's inside

- Flower welcome (plays once per tab session, `?intro=1` to replay, Escape to skip)
- Selected projects plus a filterable index of every project
- About, tools and skills, credentials
- **Ask me** — an AI guide that answers in Chabi's words, only from facts on the site
- Experience timeline and case studies
- Recruiter summary and a printable one-page CV at `/cv`

## Editing content

All text lives in `src/content/`:

- `portfolio.ts` — profile, projects, roles, skills, case studies
- `recruiter.ts` — education and the "At a glance" summary
- `guide-topics.ts` — hand-written answers the AI guide can draw on

## Running locally

```sh
bun install
bun run dev
```

Note: this version runs a small server for the AI guide, so it needs a host that runs server code (it is hosted on Lovable). A plain GitHub Pages deploy will show the site but the Ask me guide won't answer.
