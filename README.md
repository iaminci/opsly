# Opsly Domain

Marketing site for [Opsly](https://opsly.dev) — simple tools with clear opinions.

Built with TanStack Start, React, and Tailwind CSS. Deployed to Cloudflare Workers.

## Tech stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- [React 19](https://react.dev)
- [Vite 7](https://vite.dev) + [Nitro 3](https://nitro.build)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Radix UI)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) via Wrangler

## Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io) (recommended)

## Getting started

```bash
pnpm install
pnpm dev
```

Open the URL printed in the terminal (defaults to `http://localhost:3000`).

### pnpm build scripts

pnpm v11 requires explicit approval for dependency install scripts. This repo already allows the packages that need them in `pnpm-workspace.yaml`:

```yaml
allowBuilds:
  esbuild: true
  sharp: true
  workerd: true
```

If you see `ERR_PNPM_IGNORED_BUILDS`, either update that file or run:

```bash
pnpm approve-builds esbuild sharp workerd
pnpm install
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build |
| `pnpm build:dev` | Development-mode build |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format with Prettier |

## Project structure

```
domain/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── components/ui/   # shadcn/ui components
│   ├── hooks/           # React hooks
│   ├── lib/             # Utilities
│   ├── routes/          # File-based routes
│   ├── router.tsx       # Router setup
│   └── styles.css       # Global styles
├── vite.config.ts
├── wrangler.jsonc       # Cloudflare Workers config
└── pnpm-workspace.yaml  # pnpm settings (allowBuilds)
```

Routes live in `src/routes/`. TanStack Router generates `src/routeTree.gen.ts` automatically — do not edit it by hand.

| Route | Description |
| --- | --- |
| `/` | Opsly marketing homepage |
| `/md` | Opsly MD product homepage |

## Environment variables

Vite loads variables prefixed with `VITE_` from `.env` files. Create a `.env.local` for local overrides:

```bash
# .env.local
VITE_EXAMPLE=value
```

Access in code via `import.meta.env.VITE_EXAMPLE`.

## Deployment

The site targets Cloudflare Workers. Build first, then deploy with Wrangler:

```bash
pnpm build
pnpm exec wrangler deploy
```

Configuration lives in `wrangler.jsonc`.

## License

MIT — see [LICENSE](./LICENSE).
