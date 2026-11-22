import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { AskMe } from "@/components/portfolio/AskMe";
import { AtAGlance, Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Hero } from "@/components/portfolio/Hero";
import { useRevealSetup } from "@/components/portfolio/Reveal";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Welcome, useWelcome } from "@/components/portfolio/Welcome";
import { Work } from "@/components/portfolio/Work";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chabi Seopa · Systems, software & quality" },
      {
        name: "description",
        content:
          "Mmasechaba Francesca Seopa (Chabi), Technical Systems Analyst in Johannesburg. Software projects, Scrum testing research and work on telecoms, IoT and AI delivery.",
      },
      { property: "og:title", content: "Chabi Seopa · Systems, software & quality" },
      {
        property: "og:description",
        content: "Technical Systems Analyst in Johannesburg — projects, research and experience. Ask the AI guide anything about my work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const welcome = useWelcome();
  useRevealSetup();
  return (
    <div id="top">
      <Welcome open={welcome.open} replay={welcome.replay} onClose={welcome.close} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero onReplay={welcome.show} />
        <Work />
        <About />
        <AskMe />
        <Experience />
        <AtAGlance />
        <Contact />
      </main>
    </div>
  );
}
