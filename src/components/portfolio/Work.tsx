import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import traceBoard from "@/assets/trace-board.svg";
import queryEditor from "@/assets/query-editor.svg";
import { Button } from "@/components/ui/button";
import {
  featuredProjects,
  indexProjects,
  projectCategories,
  type ProjectCategory,
} from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const covers = {
  trace: { src: traceBoard, alt: "Preview of requirements and their test coverage in Petal Trace.", bg: "bg-blush" },
  query: { src: queryEditor, alt: "Preview of a query filtering products by price in Rose Query.", bg: "bg-sage" },
};

const categoryNote: Record<ProjectCategory, string> = {
  Testing: "Testing & quality",
  Tools: "Everyday tools",
  Web: "Web & layout",
  Play: "Play & art",
};

export function Work() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? indexProjects : indexProjects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="work" aria-labelledby="work-title" className="wrap py-20 md:py-28">
      <SectionHeading number="01" label="Work" id="work-title" title="Selected projects" aside="Two tools you can try in your browser, then everything else I’ve made." />

      <div className="grid gap-10 md:grid-cols-2">
        {featuredProjects.map((p, i) => {
          const cover = covers[p.cover];
          return (
            <Reveal as="article" key={p.name} delay={i * 120} className="group">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${p.name} demo in a new tab`}
                className={`block overflow-hidden rounded-lg border ${cover.bg} shadow-card transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lift`}
              >
                <img src={cover.src} alt={cover.alt} width={540} height={228} className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]" />
              </a>
              <div className="pt-6">
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-2 text-[clamp(2rem,3vw,2.7rem)] leading-tight tracking-[-0.045em]">{p.name}</h3>
                <p className="mt-2 max-w-[52ch] leading-relaxed text-muted-foreground">{p.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-secondary px-3 py-1 font-mono text-[0.7rem] text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-5 text-sm font-medium">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary link-underline">
                    Live demo <ArrowUpRight className="size-3.5" />
                    <span className="sr-only">for {p.name} (new tab)</span>
                  </a>
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground link-underline">
                    <Github className="size-3.5" /> Source code
                    <span className="sr-only">for {p.name} (new tab)</span>
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-t pt-8">
          <div>
            <h3 className="text-3xl tracking-[-0.04em]">More projects</h3>
            <p className="mt-1 text-sm text-muted-foreground">Small apps, test suites and experiments.</p>
          </div>
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <Button
                key={c}
                variant="chip"
                size="pill"
                data-active={filter === c}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c}
                <span className="font-mono text-[0.65rem] opacity-70">
                  {c === "All" ? indexProjects.length : indexProjects.filter((p) => p.category === c).length}
                </span>
              </Button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visible.map((p) => (
            <li
              key={p.name}
              className="group flex flex-col rounded-lg border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card"
            >
              <p className="folio">{categoryNote[p.category]}</p>
              <h4 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.03em]">{p.name}</h4>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <div className="mt-4 flex gap-4 border-t border-rule-soft pt-3 text-sm font-medium">
                {p.links.map((l, i) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${l.label} for ${p.name} (new tab)`}
                    className={`inline-flex items-center gap-1 link-underline ${i === 0 ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {l.label} <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
