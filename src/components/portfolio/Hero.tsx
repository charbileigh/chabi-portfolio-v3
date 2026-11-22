import { ArrowDown, ArrowRight, MapPin, RotateCcw } from "lucide-react";
import cosmos from "@/assets/cosmos.svg";
import { Button } from "@/components/ui/button";
import { currentRole, indexProjects, featuredProjects, profile } from "@/content/portfolio";

const facts = [
  { value: "4+", label: "years in software" },
  { value: String(indexProjects.length + featuredProjects.length), label: "things I’ve built" },
  { value: "ISTQB", label: "certified tester" },
  { value: "MCom", label: "research in progress" },
];

export function Hero({ onReplay }: { onReplay: () => void }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 paper-glow" aria-hidden="true" />
      <div className="wrap relative grid items-center gap-12 pb-16 pt-14 md:grid-cols-[1.4fr_1fr] md:pb-20 md:pt-20 lg:gap-20">
        <div>
          <p className="eyebrow flex items-center gap-3 welcome-rise" style={{ "--rise-delay": "0s" } as React.CSSProperties}>
            <span className="h-px w-7 bg-primary" /> {profile.fullName}
          </p>
          <h1 id="hero-title" className="display mt-6 text-[clamp(4.2rem,8vw,7rem)]">
            Hi, I’m <em className="text-primary">{profile.nickname}.</em>
          </h1>
          <p className="mt-6 max-w-[54ch] text-[1.08rem] leading-relaxed text-foreground/80">
            I’m a {profile.role} in Johannesburg. I like sitting with a client to understand what they need, then tracing
            a workflow, an API call or a database record to see how the system actually works.
          </p>
          <p className="mt-3 max-w-[54ch] leading-relaxed text-muted-foreground">
            I work on telecoms and IoT platforms. Outside work, I build small browser tools and research how teams test
            software in Scrum.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button asChild variant="hero" size="lg">
              <a href="#work">
                Explore my work <ArrowDown />
              </a>
            </Button>
            <a href="#about" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary link-underline">
              A bit about me <ArrowRight className="size-3.5" />
            </a>
            <button
              type="button"
              onClick={onReplay}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
            >
              <RotateCcw className="size-3.5" /> Replay welcome
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] md:justify-self-end">
          <figure className="relative rounded-sm border bg-parchment shadow-card">
            <img
              src={cosmos}
              alt="A fine ink drawing of two pale pink cosmos flowers and a bud."
              width={428}
              height={294}
              className="specimen-sway block h-auto w-full"
            />
            <figcaption className="mx-[6%] flex items-baseline justify-between border-t border-border py-3">
              <span className="folio">Fig. 01</span>
              <i className="font-serif text-lg">Cosmos study</i>
            </figcaption>
          </figure>
          <div className="relative -mt-px ml-6 mr-[-0.5rem] rounded-b-lg rounded-t-none border bg-card p-4 shadow-lift sm:ml-12">
            <p className="folio flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage-foreground/50" />
                <span className="relative inline-flex size-2 rounded-full bg-sage-foreground" />
              </span>
              Currently
            </p>
            <p className="mt-2 font-serif text-xl leading-tight">
              {currentRole.title} at {currentRole.company}
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-primary" /> {profile.location}
            </p>
          </div>
        </div>
      </div>

      <div className="wrap relative">
        <dl className="grid grid-cols-2 border-y md:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.label} className={`px-1 py-5 md:px-6 ${i > 0 ? "md:border-l" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""}`}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="display block text-4xl text-primary">{f.value}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
