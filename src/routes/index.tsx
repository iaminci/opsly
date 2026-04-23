import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Opsly – Local-first tools" },
      {
        name: "description",
        content:
          "Simple, local-first tools that run in your browser. No accounts, no tracking.",
      },
      { property: "og:title", content: "Opsly – Local-first tools" },
      {
        property: "og:description",
        content:
          "Simple, local-first tools that run in your browser. No accounts, no tracking.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1000px] px-6 py-16 md:py-24">
        {/* HERO */}
        <header className="border-b-2 border-foreground pb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">Opsly</h1>
          <p className="mt-6 text-xl md:text-2xl font-semibold">
            Simple tools that stay out of your way.
          </p>
          <p className="mt-2 text-base md:text-lg text-muted-foreground">
            Local-first, privacy-focused utilities.
          </p>
          <div className="mt-10">
            <a
              href="https://md.opsly.dev"
              className="inline-block border-2 border-foreground bg-accent px-6 py-3 text-base font-bold shadow-[6px_6px_0_0_var(--foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_var(--foreground)]"
            >
              Explore Opsly MD →
            </a>
          </div>
        </header>

        {/* PRODUCTS */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Products</h2>
          <article className="border-2 border-foreground bg-card p-6 md:p-8 shadow-[6px_6px_0_0_var(--foreground)]">
            <h3 className="text-2xl font-bold">Opsly MD</h3>
            <p className="mt-2 text-base text-muted-foreground">
              Local-first Markdown workspace that runs entirely in your browser.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://md.opsly.dev"
                className="inline-block border-2 border-foreground bg-foreground text-background px-4 py-2 text-sm font-bold shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--foreground)]"
              >
                Open App
              </a>
              <a
                href="https://github.com/iaminci/opsly-md"
                className="inline-block border-2 border-foreground bg-background px-4 py-2 text-sm font-bold shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--foreground)]"
              >
                GitHub
              </a>
            </div>
          </article>
        </section>

        {/* PHILOSOPHY */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Philosophy</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              "Local-first by default",
              "No accounts",
              "No lock-in",
              "Tools should stay simple",
            ].map((item) => (
              <li
                key={item}
                className="border-2 border-foreground bg-card px-4 py-3 font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t-2 border-foreground pt-6 flex items-center justify-between text-sm">
          <a
            href="https://github.com/iaminci"
            className="font-bold underline underline-offset-4 decoration-2"
          >
            GitHub
          </a>
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} Opsly
          </span>
        </footer>
      </div>
    </div>
  );
}
