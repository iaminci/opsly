import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { HeroFeatureStack } from "@/components/md/HeroFeatureStack";
import { SiteFooter } from "@/components/md/SiteFooter";
import { SiteHeader } from "@/components/md/SiteHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const homeTitle = "Opsly MD — A local-first Markdown workspace.";
const homeDescription =
  "Runs entirely in your browser — no accounts, no servers, no tracking.";

const APP_URL = "https://md.opsly.dev/app";

const HOME_CONTAINER =
  "mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12";

export const Route = createFileRoute("/md/")({
  head: () => ({
    meta: [
      { title: homeTitle },
      { name: "description", content: homeDescription },
      { property: "og:title", content: homeTitle },
      { property: "og:description", content: homeDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: homeTitle },
      { name: "twitter:description", content: homeDescription },
    ],
  }),
  component: MdHomePage,
});

function MdHomePage() {
  return (
    <div className="md-mono home-page flex min-h-screen flex-col text-[hsl(var(--ink))]">
      <div className={`${HOME_CONTAINER} flex flex-1 flex-col`}>
        <SiteHeader />
        <main className="flex-1">
          <section className="grid items-center gap-10 border-b-2 border-[hsl(var(--ink))] py-14 sm:gap-12 sm:py-16 lg:min-h-[min(100svh-5rem,44rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:py-16 xl:gap-16">
            <div className="flex min-w-0 flex-col justify-center">
              <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] tracking-tight text-[hsl(var(--ink))]">
                Your Knowledge
                <br />
                <span className="mt-1 inline-block bg-[hsl(var(--ink))] px-2 py-0.5 text-[hsl(var(--background))]">
                  In plain text.
                </span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[hsl(var(--ink))]/75 sm:mt-6 sm:text-lg">
                Notes, documentation, and structured knowledge in a Markdown-first workspace.
              </p>
              <div className="mt-8 sm:mt-10">
                <Button
                  asChild
                  className={cn(
                    "relative h-auto justify-start gap-3 rounded-none border-2 border-[hsl(var(--ink))] bg-[hsl(var(--background))] px-7 py-4 font-mono-accent text-base font-bold uppercase tracking-[0.08em] text-[hsl(var(--ink))] shadow-[8px_8px_0_0_hsl(var(--ink))] transition-[transform,box-shadow] duration-100 hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[hsl(var(--background))] hover:shadow-[2px_2px_0_0_hsl(var(--ink))] active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0_0_hsl(var(--ink))]",
                  )}
                >
                  <a href={APP_URL}>
                    <span className="inline-flex items-center gap-2">
                      Start Writing
                      <ArrowRight className="size-4" />
                    </span>
                  </a>
                </Button>
              </div>
            </div>

            <HeroFeatureStack className="min-w-0" />
          </section>

          <section className="home-idea" aria-labelledby="idea-heading">
            <div className="home-idea__layout">
              <div className="home-idea__aside">
                <div className="home-idea__workspace" aria-hidden="true">
                  <div className="home-idea__tree">
                    <p className="home-idea__tree-root">OPSLY MD</p>
                    <ul className="home-idea__tree-list">
                      <li className="home-idea__tree-folder">
                        <span className="home-idea__tree-label">projects</span>
                        <ul>
                          <li className="home-idea__tree-active">architecture.md</li>
                          <li>decisions.md</li>
                        </ul>
                      </li>
                      <li className="home-idea__tree-folder">
                        <span className="home-idea__tree-label">notes</span>
                        <ul>
                          <li>ideas.md</li>
                          <li>meeting-notes.md</li>
                        </ul>
                      </li>
                      <li>README.md</li>
                    </ul>
                  </div>
                  <div className="home-idea__doc">
                    <p className="home-idea__doc-title">Architecture</p>
                    <p className="home-idea__doc-h2">Overview</p>
                    <p className="home-idea__doc-body">
                      The system consists of three main components…
                    </p>
                    <p className="home-idea__doc-h2">Decisions</p>
                    <ul className="home-idea__doc-list">
                      <li>Keep the workspace simple</li>
                      <li>Store documents as Markdown</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="home-idea__primary">
                <p className="home-idea__eyebrow">The idea</p>
                <h2 id="idea-heading" className="home-idea__statement">
                  A simple place for your knowledge.
                </h2>
                <p className="home-idea__support">
                  Opsly MD brings writing, organization, and Markdown together in one focused
                  workspace.
                </p>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
