import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Menu, X } from "lucide-react";
import { FlowerMark } from "./FlowerMark";
import { cn } from "@/lib/utils";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "ask", label: "Ask me" },
  { id: "experience", label: "Experience" },
];

export function SiteHeader() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const sections = [...links.map((l) => l.id), "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "no-print sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <a href="#top" className="group inline-flex items-center gap-2" aria-label="chabi.lol, back to top">
          <FlowerMark size={28} className="mark-spin" />
          <span className="font-serif text-[1.9rem] leading-none tracking-[-0.06em]">chabi.lol</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                active === l.id ? "text-primary" : "text-foreground/80 hover:text-primary",
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300",
                  active === l.id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          ))}
          <Link to="/cv" className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary">
            CV
          </Link>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Contact <Mail className="size-3.5" />
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border md:hidden"
          aria-expanded={menu}
          aria-controls="mobile-nav"
          aria-label={menu ? "Close menu" : "Open menu"}
          onClick={() => setMenu((m) => !m)}
        >
          {menu ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      {menu && (
        <nav id="mobile-nav" aria-label="Mobile" className="wrap flex flex-col gap-1 pb-4 md:hidden">
          {[...links, { id: "contact", label: "Contact" }].map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setMenu(false)} className="border-t py-3 font-serif text-2xl">
              {l.label}
            </a>
          ))}
          <Link to="/cv" className="border-t py-3 font-serif text-2xl">
            CV
          </Link>
        </nav>
      )}
    </header>
  );
}
