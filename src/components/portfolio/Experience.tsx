import { caseStudies, currentRole, expertise, previousRoles } from "@/content/portfolio";
import { Reveal } from "./Reveal";

export function Experience() {
  const [recent, ...earlier] = previousRoles;
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t">
      <div className="wrap grid gap-12 py-20 md:grid-cols-[1fr_1.8fr] md:gap-20 md:py-28">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <p className="folio">
            <span className="text-primary">04</span> / Career
          </p>
          <h2 id="experience-title" className="display mt-3 text-[clamp(2.7rem,4.6vw,4rem)]">
            Experience
          </h2>
          <p className="mt-5 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
            I’ve worked on the same kinds of systems from different sides, first as a developer, then in configuration and
            L2 support, and now as an analyst.
          </p>
        </Reveal>

        <div>
          <ol className="relative border-l border-border pl-8">
            <Reveal as="li" className="relative pb-12">
              <span className="absolute -left-[38.5px] top-1.5 grid size-[13px] place-items-center rounded-full bg-primary ring-4 ring-blush" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-semibold text-primary">{currentRole.company}</p>
                <p className="font-mono text-xs text-muted-foreground">{currentRole.period}</p>
              </div>
              <h3 className="mt-2 text-[clamp(1.8rem,2.6vw,2.3rem)] leading-tight tracking-[-0.03em]">{currentRole.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{currentRole.summary}</p>
              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {currentRole.scope.map((s, i) => (
                  <div
                    key={s.title}
                    className={`rounded-lg border bg-card p-5 ${i === currentRole.scope.length - 1 && currentRole.scope.length % 2 === 1 ? "sm:col-span-2" : ""}`}
                  >
                    <dt className="font-semibold">{s.title}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {recent && (
              <Reveal as="li" className="relative pb-12">
                <span className="absolute -left-[38.5px] top-1.5 size-[13px] rounded-full border-2 border-primary bg-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-primary">{recent.company}</p>
                  <p className="font-mono text-xs text-muted-foreground">{recent.period}</p>
                </div>
                <h3 className="mt-2 text-[clamp(1.6rem,2.3vw,2rem)] leading-tight tracking-[-0.03em]">{recent.title}</h3>
                {recent.body && <p className="mt-3 leading-relaxed text-muted-foreground">{recent.body}</p>}
                {recent.highlights && (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {recent.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            )}

            <Reveal as="li" className="relative">
              <span className="absolute -left-[36.5px] top-1.5 size-[9px] rounded-full bg-border" />
              <p className="folio">Earlier roles</p>
              <ul className="mt-4 divide-y divide-rule-soft border-y border-rule-soft">
                {earlier.map((r) => (
                  <li key={r.title} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{r.title}</p>
                      <p className="text-sm text-muted-foreground">{r.company}</p>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">{r.period}</p>
                    {r.body && <p className="basis-full text-sm leading-relaxed text-muted-foreground">{r.body}</p>}
                  </li>
                ))}
              </ul>
            </Reveal>
          </ol>

          <Reveal className="mt-16">
            <h3 className="text-2xl tracking-[-0.03em]">Areas of expertise</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {expertise.map((e) => (
                <div key={e.area} className="rounded-lg border bg-card p-5">
                  <p className="eyebrow text-primary">{e.area}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {e.items.map((i) => (
                      <li key={i} className="rounded-full border bg-background px-2.5 py-1 text-xs">{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <h3 className="text-2xl tracking-[-0.03em]">Case studies from my work</h3>
            <p className="mt-1 text-sm text-muted-foreground">Anonymised examples of recurring work on enterprise systems.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {caseStudies.map((c, i) => (
                <article key={c.title} className="rounded-lg border bg-gradient-to-b from-blush/60 to-card p-5">
                  <p className="display text-4xl text-primary/70">0{i + 1}</p>
                  <h4 className="mt-3 text-xl leading-snug tracking-[-0.02em]">{c.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
