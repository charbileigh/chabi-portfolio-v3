import { Award, GraduationCap, MapPin } from "lucide-react";
import { credentials, profile, toolbox } from "@/content/portfolio";
import { education } from "@/content/recruiter";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t bg-parchment/60">
      <div className="wrap grid gap-12 py-20 md:grid-cols-[1fr_1.8fr] md:gap-20 md:py-28">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <p className="folio">
            <span className="text-primary">02</span> / Background
          </p>
          <h2 id="about-title" className="display mt-3 text-[clamp(2.7rem,4.6vw,4rem)]">
            A bit about me
          </h2>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" /> {profile.location}
          </p>
          <ul className="mt-8 space-y-4">
            {education.map((e) => (
              <li key={e.title} className="flex gap-3">
                <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">{e.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {e.place} · {e.status}
                  </p>
                </div>
              </li>
            ))}
            {credentials.map((c) => (
              <li key={c} className="flex gap-3">
                <Award className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-sm font-semibold">{c}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-serif text-[clamp(1.55rem,2.4vw,2.05rem)] leading-[1.25] tracking-[-0.022em]">
              I came to software through mechanical and mechatronic engineering. I still like taking something apart to
              understand how it works. These days, it’s more likely to be a <em className="text-primary">workflow</em>.
            </p>
          </Reveal>
          <Reveal className="mt-7 space-y-4 leading-[1.75] text-muted-foreground" delay={80}>
            <p>
              I studied at the University of Cape Town, where I earned my BSc in Mechanical and Mechatronic Engineering.
              Working across development, QA and support gave me different ways to look at the same problem. A change can
              make sense on a diagram and still do something unexpected when real data moves through it.
            </p>
            <p>
              I’m back at UCT for an MCom in Information Systems. I’m researching how testing contributes to project success
              in Scrum. I’m interested in what people learn from a test and how that shapes their decision to release a
              change.
            </p>
            <p>
              On the creative side, I like a bit of pink and building things I can actually use. That’s where projects like
              Bunny Burrow, my offline focus timer, and Petal Studio, my drawing app, fit in.
            </p>
          </Reveal>

          <Reveal className="mt-12" delay={120}>
            <h3 className="text-2xl tracking-[-0.03em]">Tools and skills</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {toolbox.map((t) => (
                <div key={t.group} className="rounded-lg border bg-card p-5">
                  <p className="eyebrow">{t.group}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {t.items.map((i) => (
                      <li key={i} className="rounded-full border border-rule-soft bg-background px-2.5 py-1 text-xs text-foreground/80">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
