import { ArrowUp, ArrowUpRight, Check, Copy, FileText, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/portfolio";
import { atAGlance } from "@/content/recruiter";
import { Reveal } from "./Reveal";

export function AtAGlance() {
  return (
    <section aria-labelledby="glance-title" className="border-t bg-parchment/60">
      <div className="wrap py-16 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="folio">For recruiters</p>
            <h2 id="glance-title" className="display mt-3 text-[clamp(2.2rem,3.6vw,3rem)]">
              At a glance
            </h2>
          </div>
          <Button asChild variant="hero" size="lg">
            <Link to="/cv">
              <FileText /> View &amp; download my CV
            </Link>
          </Button>
        </Reveal>
        <Reveal as="dl" delay={80} className="mt-8 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {atAGlance.map((a) => (
            <div key={a.label} className="bg-card p-5">
              <dt className="eyebrow">{a.label}</dt>
              <dd className="mt-2 text-[0.95rem] leading-snug">{a.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email address copied");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn’t copy — please select the address instead.");
    }
  };
  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t bg-blush">
        <div className="pointer-events-none absolute inset-0 paper-glow opacity-70" aria-hidden="true" />
        <div className="wrap relative grid items-end gap-10 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <Reveal>
            <p className="folio">
              <span className="text-primary">05</span> / Contact
            </p>
            <h2 id="contact-title" className="display mt-3 text-[clamp(3.4rem,7vw,6rem)]">
              Get in touch<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 max-w-[40ch] text-muted-foreground">
              Questions about my work, research or a project? I’d love to hear from you.
            </p>
          </Reveal>
          <Reveal delay={100} className="md:justify-self-end">
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] tracking-[-0.03em] text-primary link-underline">
                {profile.email}
              </a>
              <Button variant="petal" size="icon" onClick={copy} aria-label="Copy email address">
                {copied ? <Check /> : <Copy />}
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                <Linkedin className="size-4" /> LinkedIn <ArrowUpRight className="size-3.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                <Github className="size-4" /> GitHub <ArrowUpRight className="size-3.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <Link to="/cv" className="inline-flex items-center gap-1.5 hover:text-primary">
                <FileText className="size-4" /> CV
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="wrap flex flex-wrap items-center justify-between gap-3 py-6 text-sm text-muted-foreground">
        <span>© 2026 {profile.fullName}</span>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-primary">
          Back to top <ArrowUp className="size-3.5" />
        </a>
      </footer>
    </>
  );
}
