import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dot } from "@/components/ui/dot";
import { Marquee } from "@/components/ui/marquee";
import {
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
} from "@/components/ui/panel";
import { Tag } from "@/components/ui/tag";
import {
  Terminal,
  TerminalBody,
  TerminalChrome,
  TerminalTrafficLights,
} from "@/components/ui/terminal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Opsly — Simple tools. Clear opinions. No compromises." },
      {
        name: "description",
        content:
          "Simple tools with clear opinions. Built to stay out of your way.",
      },
      {
        property: "og:title",
        content: "Opsly — Simple tools. Clear opinions. No compromises.",
      },
      {
        property: "og:description",
        content:
          "Simple tools with clear opinions. Built to stay out of your way.",
      },
    ],
  }),
  component: Index,
});

const MD_URL = "https://md.opsly.dev";
const GITHUB_URL = "https://github.com/iaminci";
const PROJECTS_URL = "https://github.com/iaminci?tab=repositories";

const heroBullets = [
  "simple by default",
  "no extra layers",
  "no wasted motion",
] as const;

const philosophy = [
  "simple is hard.",
  "complexity hides laziness.",
  "control your stack.",
  "don’t depend on promises.",
] as const;

const MARQUEE_TEXT =
  "LOCAL-FIRST ◆ OFFLINE DEFAULT ◆ NO DRIFT MODE ◆ SINGLE TOOL ◆ BUILT TO LAST ◆ LOCAL-FIRST ◆ ";

function PrimaryCTA({
  children,
  href = MD_URL,
  size = "lg",
}: {
  children: React.ReactNode;
  href?: string;
  size?: "lg" | "md";
}) {
  const padding = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  return (
    <Button
      asChild
      className={cn(
        "group relative h-auto justify-start gap-3 rounded-none border-2 border-[hsl(var(--ink))] bg-[hsl(var(--orange))] font-mono-accent font-bold uppercase tracking-[0.08em] text-[hsl(var(--ink))] shadow-[8px_8px_0_0_hsl(var(--ink))] transition-[transform,box-shadow] duration-100 hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[hsl(var(--orange))] hover:shadow-[2px_2px_0_0_hsl(var(--ink))] active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0_0_hsl(var(--ink))]",
        padding,
      )}
    >
      <a href={href}>
        <span
          aria-hidden="true"
          className="inline-block -translate-x-[6px] opacity-0 transition-all duration-200 ease group-hover:translate-x-0 group-hover:opacity-100"
        >
          →
        </span>
        <span className="inline-block transition-all duration-200 ease group-hover:translate-x-[2px]">
          {children}
        </span>
      </a>
    </Button>
  );
}

function GhostLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Button
      asChild
      variant="link"
      className="group inline-flex h-auto items-center gap-2 rounded-none border-b-2 border-[hsl(var(--ink))] px-0 pt-0 pb-0.5 font-mono-accent text-sm font-medium uppercase tracking-wider text-[hsl(var(--ink))] hover:text-[hsl(var(--orange))] hover:no-underline"
    >
      <a href={href}>
        <span>{children}</span>
        <span className="inline-block transition-transform duration-100 group-hover:translate-x-1">
          ↗
        </span>
      </a>
    </Button>
  );
}

function VerticalMarquee() {
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-[16px] z-20 hidden h-screen w-10 md:block"
    >
      <Marquee
        text={MARQUEE_TEXT}
        variant="primary"
        orientation="vertical"
        className="h-full w-full"
      />
    </div>
  );
}

function ProductsHeaderStrip() {
  return (
    <div className="border-y-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))]">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 py-3 pr-5 md:pr-10">
        <span className="min-w-0 truncate font-mono-accent text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--ink))]/55">
          01 — Products
        </span>
        <span className="hidden shrink-0 px-2 text-center font-mono-accent text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--ink))]/40 md:block">
          No drift. Just control.
        </span>
        <span
          className="shrink-0 font-mono-accent text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--orange))]"
          aria-hidden="true"
        >
          ↓
        </span>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="border-b-2 border-[hsl(var(--ink))] bg-[hsl(var(--background))]">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between py-3 pr-5 md:pr-10">
        <div className="flex items-center gap-3 font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--ink))]/70">
          <Dot className="inline-block" />
          <span className="text-[hsl(var(--ink))]">opsly</span>
          <span className="text-[hsl(var(--ink))]/40">/</span>
          <span>v0.1 · system</span>
        </div>
        <div className="hidden items-center gap-5 font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--ink))]/70 md:flex">
          <span>
            <span className="text-[hsl(var(--ink))]/40">[mode]</span>{" "}
            <span className="text-[hsl(var(--orange))]">default</span>
          </span>
          <span>
            <span className="text-[hsl(var(--ink))]/40">[layers]</span> minimal
          </span>
          <span>
            <span className="text-[hsl(var(--ink))]/40">[noise]</span>{" "}
            <span className="text-[hsl(var(--orange))]">none</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroTerminal() {
  return (
    <div className="relative pointer-events-none select-none" aria-hidden="true">

      <Terminal className="shadow-[12px_12px_0_0_hsl(var(--orange))]">
        <TerminalChrome>
          <TerminalTrafficLights />
          <span className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--ink))]/50">
            · ACTIVE
          </span>
        </TerminalChrome>

        <TerminalBody>
          <p>
            <span className="text-[hsl(var(--orange))]">~$</span>{" "}
            <span className="text-[hsl(var(--ink))]">opsly run md</span>
          </p>
          <p className="pl-1">
            <span className="text-[hsl(var(--orange))]">✓</span>{" "}
            <span>booting markdown workspace</span>
          </p>
          <p className="pl-1">
            <span className="text-[hsl(var(--orange))]">✓</span>{" "}
            <span>loading workspace</span>
          </p>
          <p className="pl-1">
            <span className="text-[hsl(var(--orange))]">✓</span>{" "}
            <span>indexing files</span>
          </p>
          <p className="pt-3">
            <span></span>
          </p>
          <p className="pl-1">
            <span>ready.</span>
          </p>
          <p className="pl-1">
            <span className="text-[hsl(var(--orange))]">~$</span>{" "}
            <span className="text-[hsl(var(--ink))]/70">█</span>
          </p>
        </TerminalBody>
      </Terminal>

      {/* corner stamp */}
      <Tag
        size="lg"
        className="absolute -bottom-3 -right-3 hidden md:inline-block"
      >
        instance
      </Tag>
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/* Subtle grid backdrop, never decorative-looking */}
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />

      <VerticalMarquee />

      <div className="relative z-10 flex min-h-screen flex-col pl-5 md:pl-[88px]">
        <TopBar />

        <main className="flex-1">
          {/* ============== HERO ============== */}
          <section className="relative overflow-hidden pt-14 pr-5 pb-24 md:pt-20 md:pr-10 md:pb-40">
            {/* large faint section number, off-axis */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-2 top-6 hidden font-mono-accent text-[12px] uppercase tracking-[0.4em] text-[hsl(var(--ink))]/30 md:block"
            >
              00 / chaos
            </div>

            <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-6">
              {/* LEFT: huge title, bullets */}
              <div className="relative min-w-0 lg:col-span-7">
                {/* meta strip */}
                <div className="mb-6 flex flex-wrap items-center gap-3 font-mono-accent text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--ink))]/65">
                  <Tag>01</Tag>
                  <span>opsly runtime</span>
                  <span className="text-[hsl(var(--ink))]/40">//</span>
                  <span className="text-[hsl(var(--orange))]">
                    since 2026
                  </span>
                </div>

                {/* TITLE — bleeds slightly off-axis, oversized */}
                <h1 className="font-display -ml-1 text-[19vw] leading-[0.84] text-[hsl(var(--ink))] md:-ml-2 md:text-[14vw] lg:text-[13.5rem] xl:text-[15rem]">
                  <span className="block">Opsly</span>
                </h1>

                {/* cluster: tagline + bullets, intentional uneven margins */}
                <div className="mt-8 grid grid-cols-12 gap-4">
                  <p className="col-span-12 text-lg leading-[1.15] tracking-tight sm:text-xl md:text-2xl md:leading-[1.1] lg:col-span-10 lg:text-[2rem]">
                      Simple tools.{" "}
                    <span className="text-[hsl(var(--ink))]/55">
                      Clear opinions.
                    </span>{" "}
                    <span className="bg-[hsl(var(--orange))] px-1.5 text-[hsl(var(--ink))]">
                      No compromises.
                    </span>
                  </p>

                  <ul className="col-span-12 mt-8 space-y-1.5 font-mono-accent text-[13px] text-[hsl(var(--ink))]/75 md:col-span-7 md:mt-10">
                    {heroBullets.map((line) => (
                      <li key={line} className="flex items-center gap-3">
                        <span className="text-[hsl(var(--orange))]">$</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT: terminal — vertically misaligned */}
              <div className="min-w-0 lg:col-span-5 lg:translate-y-24">
                <HeroTerminal />

                {/* Sticky note style asymmetric label below */}
                <div className="mt-10 flex items-start gap-3 font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--ink))]/60 lg:pl-6">
                  <Dot className="mt-[3px] shrink-0" />
                  <p>
                    built to stay out of your way.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <ProductsHeaderStrip />

          {/* ============== PRODUCTS ============== */}
          <section className="relative pt-24 pr-5 pb-28 md:pt-28 md:pr-10 md:pb-32">
            <div className="mx-auto w-full max-w-[1400px]">
              {/* Section header — asymmetric: label far left, oversized number far right */}
              <div className="mb-12 grid grid-cols-12 items-end gap-4">
                <div className="col-span-12 md:col-span-7">
                  <div className="flex items-baseline gap-3 font-mono-accent text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--ink))]/60">
                    <Tag>products</Tag>
                    <span>/ 01</span>
                  </div>
                  <h2 className="font-display mt-4 text-5xl leading-[0.9] text-[hsl(var(--ink))] md:text-7xl">
                    The product.
                    <br />
                    <span className="text-[hsl(var(--orange))]">Singular.</span>
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-5 md:text-right">
                  <p className="ml-auto max-w-sm font-mono-accent text-[12px] leading-relaxed text-[hsl(var(--ink))]/55 md:ml-auto">
                    One tool. One job.{" "}
                    <span className="text-[hsl(var(--orange))]">
                      No drift.
                    </span>
                  </p>
                </div>
              </div>

              {/* Card row — 12 col grid, card not full-width, shadow off-axis */}
              <div className="grid grid-cols-12 items-start gap-6">
                {/* Vertical "01" badge floating left */}
                <div className="col-span-2 hidden md:block">
                  <Card variant="slot">
                    <p className="font-display text-5xl leading-none text-[hsl(var(--ink))]">
                      01
                    </p>
                    <p className="mt-3">slot 01 / 01</p>
                    <p className="mt-1 text-[hsl(var(--orange))]">active</p>
                  </Card>
                </div>

                <Card
                  variant="product"
                  className="relative col-span-12 md:col-span-9"
                >
                  {/* internal split header */}
                  <div className="flex items-center justify-between border-b-2 border-[hsl(var(--ink))] bg-[hsl(var(--background))] px-6 py-3 font-mono-accent text-[11px] uppercase tracking-[0.22em]">
                    <span className="text-[hsl(var(--ink))]/70">
                      01 · markdown workspace
                    </span>
                    <span className="hidden items-center gap-2 text-[hsl(var(--orange))] md:inline-flex">
                      <Dot size="sm" className="animate-blink" />
                      live · md.opsly.dev
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-10 px-6 py-10 md:grid-cols-12 md:px-10 md:py-14">
                    <div className="space-y-8 md:col-span-7">
                      <h3 className="font-display flex flex-wrap items-baseline gap-x-4 text-6xl leading-[0.85] text-[hsl(var(--ink))] md:text-7xl">
                        <span className="inline-flex items-baseline gap-2">
                          <span className="text-[hsl(var(--orange))] italic">#</span>
                          <span>OPSLY</span>
                        </span>
                        <span className="text-[hsl(var(--orange))]">MD</span>
                      </h3>
                      <p className="max-w-prose text-lg leading-relaxed text-[hsl(var(--ink))]/75">
                        Markdown workspace.<br />
                        Runs entirely in your browser.<br />
                        Your files never leave your machine.
                      </p>

                      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <PrimaryCTA>Enter</PrimaryCTA>
                        <Button
                          asChild
                          variant="link"
                          className="group h-auto rounded-none px-0 py-0 font-mono-accent text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--ink))]/60 hover:text-[hsl(var(--orange))] hover:no-underline"
                        >
                          <a href={GITHUB_URL}>[ source on github ↗ ]</a>
                        </Button>
                      </div>
                    </div>

                    {/* mini spec block — stamped, brutal, tabular */}
                    <div className="md:col-span-5 md:translate-y-1">
                      <Card variant="spec">
                        <p className="border-b-2 border-[hsl(var(--ink))]/70 bg-[hsl(var(--surface-2))] px-4 py-2 font-mono-accent text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--ink))]/60">
                          spec.txt
                        </p>
                        <dl className="divide-y divide-[hsl(var(--ink))]/15 font-mono-accent text-[12px] text-[hsl(var(--ink))]/80">
                          {[
                            ["runtime", "browser"],
                            ["storage", "local"],
                            ["sync", "disabled"],
                            ["accounts", "none"],
                            ["telemetry", "off"],
                            ["price", "$0"],
                          ].map(([k, v]) => (
                            <div
                              key={k}
                              className="flex items-center justify-between px-4 py-2.5"
                            >
                              <dt className="uppercase tracking-[0.18em] text-[hsl(var(--ink))]/55">
                                {k}
                              </dt>
                              <dd className="text-[hsl(var(--orange))]">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </Card>
                    </div>
                  </div>
                </Card>

                {/* "more soon" stub — small, ghosted, asymmetric placement */}
                <aside className="col-span-12 md:col-span-3 md:col-start-10 md:-translate-y-6">
                  <Card variant="ghost">
                    <p className="text-[hsl(var(--ink))]/70">slot 02 · empty</p>
                    <p className="mt-2">
                      next tool ships when it's ready. not before.
                    </p>
                  </Card>
                </aside>
              </div>
            </div>
          </section>

          {/* divider strip */}
          <div className="border-y-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))]">
            <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between py-3 pr-5 font-mono-accent text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--ink))]/55 md:pr-10">
              <span>02 — credits</span>
              <span className="hidden md:inline">
                build by hand, no funnels.
              </span>
              <span className="text-[hsl(var(--orange))]">↓</span>
            </div>
          </div>

          {/* ============== BUILDER + PHILOSOPHY ============== */}
          <section className="relative pt-24 pr-5 pb-28 md:pt-28 md:pr-10 md:pb-32">
            <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 items-start gap-10 lg:gap-16">
              {/* LEFT — Built by */}
              <div className="col-span-12 lg:col-span-6">
                <div className="flex items-baseline gap-3 font-mono-accent text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--ink))]/60">
                  <Tag>built by</Tag>
                  <span>/ human</span>
                </div>

                <h3 className="font-display mt-5 text-6xl leading-[0.9] text-[hsl(var(--ink))] md:text-7xl">
                  Akash<span className="text-[hsl(var(--orange))]">.</span>
                </h3>

                <p className="font-dank-mono mt-1 max-w-md text-base font-normal leading-relaxed tracking-[0.02em] text-[hsl(var(--ink))]/50">
                  Built for personal use first.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                  <GhostLink href={PROJECTS_URL}>Other projects</GhostLink>
                </div>
              </div>

              {/* RIGHT — Philosophy, intentionally pushed down */}
              <div className="col-span-12 lg:col-span-6 lg:translate-y-10">
                {/* Tag label sticking out (intentional misalignment) */}
                <div className="absolute -top-4 z-10 inline-flex -translate-y-1 items-center gap-2 border-2 border-[hsl(var(--ink))] bg-[hsl(var(--background))] px-3 py-1 font-mono-accent text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--ink))]">
                  <Dot size="sm" />
                  Defaults
                </div>
                <Panel className="shadow-[10px_10px_0_0_hsl(var(--orange))]">
                  <PanelHeader>
                    <span className="text-[hsl(var(--ink))]/70">
                      philosophy.md
                    </span>
                    <span className="text-[hsl(var(--ink))]/40">— · 04 ln</span>
                  </PanelHeader>

                  <PanelBody>
                    <pre className="px-6 py-7 font-mono-accent text-[15px] leading-[1.9] text-[hsl(var(--ink))]/85">
                      {philosophy.map(
                        (line, i) =>
                          `${String(i + 1).padStart(2, "0")}  >  ${line}`,
                      ).join("\n")}
                    </pre>
                  </PanelBody>

                  <PanelFooter>
                    <span className="text-[hsl(var(--orange))]">// </span>
                    not a manifesto. just defaults.
                  </PanelFooter>
                </Panel>
              </div>
            </div>
          </section>
        </main>

        {/* ============== FOOTER ============== */}
        <footer className="border-t-2 border-[hsl(var(--ink))] bg-[hsl(var(--background))]">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 items-center gap-4 py-7 pr-5 md:pr-10">
            <div className="col-span-4 md:col-span-3">
              <p className="font-display text-2xl leading-none text-[hsl(var(--ink))]">
                Opsly
                <span className="text-[hsl(var(--orange))]">.</span>
              </p>
            </div>
            <div className="col-span-12 text-right font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--ink))]/55 md:col-span-9">
              © 2026 Opsly
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
