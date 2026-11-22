import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlowerMark } from "@/components/portfolio/FlowerMark";
import { credentials, currentRole, featuredProjects, indexProjects, previousRoles, profile, toolbox } from "@/content/portfolio";
import { education } from "@/content/recruiter";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV · Mmasechaba Francesca Seopa (Chabi)" },
      {
        name: "description",
        content: "One-page CV for Chabi Seopa, Technical Systems Analyst in Johannesburg: experience, education, skills and projects.",
      },
      { property: "og:title", content: "CV · Mmasechaba Francesca Seopa (Chabi)" },
      { property: "og:description", content: "Experience, education, skills and projects of Technical Systems Analyst Chabi Seopa." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CvPage,
});

const selectedOther = ["Petal Cases", "PINK LOOP E2E", "Bunny Burrow"];

function CvPage() {
  const others = indexProjects.filter((p) => selectedOther.includes(p.name));
  return (
    <div className="min-h-screen bg-secondary py-8 print:bg-background print:py-0">
      <div className="no-print mx-auto mb-6 flex max-w-[860px] items-center justify-between px-4">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" /> Back to portfolio
        </Link>
        <Button variant="hero" onClick={() => window.print()}>
          <Download /> Download PDF
        </Button>
      </div>

      <article className="mx-auto max-w-[860px] bg-card px-10 py-10 text-[0.82rem] leading-relaxed shadow-lift print:max-w-none print:px-0 print:py-0 print:shadow-none sm:px-14">
        <header className="flex flex-wrap items-start justify-between gap-6 border-b pb-6">
          <div>
            <h1 className="display text-5xl">
              {profile.firstName} <em className="text-primary">{profile.rest}</em>
            </h1>
            <p className="mt-2 text-base font-medium">
              {profile.role} · {profile.location}
            </p>
          </div>
          <div className="ml-auto flex items-start gap-3 text-right text-xs text-muted-foreground">
            <div className="space-y-0.5">
              <p>
                <a href={`mailto:${profile.email}`} className="text-primary">{profile.email}</a>
              </p>
              <p>linkedin.com/in/chabi-seopa</p>
              <p>github.com/charbileigh</p>
            </div>
            <FlowerMark size={34} />
          </div>
        </header>

        <section className="mt-5">
          <p className="text-[0.9rem] text-foreground/85">
            Technical Systems Analyst with 4+ years across development, QA, configuration and L2 support on telecoms and
            IoT platforms. I turn business needs into specifications, trace issues through APIs, logs and databases, and
            verify releases against the original requirements. Currently completing an MCom researching testing in Scrum.
          </p>
        </section>

        <div className="mt-6 grid gap-8 md:grid-cols-[1.7fr_1fr] print:grid-cols-[1.7fr_1fr]">
          <div>
            <h2 className="eyebrow border-b pb-1.5">Experience</h2>
            <div className="mt-3">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-serif text-lg">{currentRole.title}</h3>
                <span className="font-mono text-[0.7rem] text-muted-foreground">{currentRole.period}</span>
              </div>
              <p className="text-xs font-semibold text-primary">{currentRole.company}</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-foreground/80">
                {currentRole.scope.map((s) => (
                  <li key={s.title}>
                    <span className="font-semibold text-foreground">{s.title}.</span> {s.body.split(". ")[0]}.
                  </li>
                ))}
              </ul>
            </div>
            {previousRoles.map((r) => (
              <div key={r.title} className="mt-3">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-base">{r.title}</h3>
                  <span className="shrink-0 font-mono text-[0.7rem] text-muted-foreground">{r.period}</span>
                </div>
                <p className="text-xs font-semibold text-primary">{r.company}</p>
                {r.body && <p className="mt-1 text-foreground/80">{r.body}</p>}
                {r.highlights && (
                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-foreground/80">
                    {r.highlights.slice(0, 3).map((h) => <li key={h}>{h}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <section>
              <h2 className="eyebrow border-b pb-1.5">Education</h2>
              {education.map((e) => (
                <div key={e.title} className="mt-3">
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {e.place} · {e.status}
                  </p>
                </div>
              ))}
            </section>
            <section>
              <h2 className="eyebrow border-b pb-1.5">Certifications</h2>
              <ul className="mt-3 space-y-1.5">
                {credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="eyebrow border-b pb-1.5">Skills</h2>
              {toolbox.map((t) => (
                <div key={t.group} className="mt-3">
                  <p className="font-semibold">{t.group}</p>
                  <p className="text-xs text-muted-foreground">{t.items.join(" · ")}</p>
                </div>
              ))}
            </section>
            <section>
              <h2 className="eyebrow border-b pb-1.5">Selected projects</h2>
              <ul className="mt-3 space-y-2">
                {featuredProjects.map((p) => (
                  <li key={p.name}>
                    <span className="font-semibold">{p.name}</span>
                    <span className="text-xs text-muted-foreground"> — {p.category}</span>
                  </li>
                ))}
                {others.map((p) => (
                  <li key={p.name}>
                    <span className="font-semibold">{p.name}</span>
                    <span className="text-xs text-muted-foreground"> — {p.blurb}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">More at chabi.lol · github.com/charbileigh</p>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
