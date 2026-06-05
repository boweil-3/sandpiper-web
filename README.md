# Sandpiper Web

Marketing site for [Sandpiper](https://sandpiper-app.com) — a travel schedule app that helps you beat jet lag and arrive ready.

## Stack

- [React 19](https://react.dev/) + [TanStack Start](https://tanstack.com/start) / [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) (Nitro preset, SSR)

## Pages

| Route     | Description              |
| --------- | ------------------------ |
| `/`       | Landing page             |
| `/privacy`| Privacy policy           |
| `/terms`  | Terms of use             |

The landing page includes an interactive phone mockup, schedule preview, and download CTAs. Copy is available in nine languages (English, French, Spanish, German, Portuguese, Simplified Chinese, Traditional Chinese, Japanese, Korean).

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The dev server starts with Vite. Open the URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start local dev server               |
| `npm run build`    | Production build to `dist/`          |
| `npm run preview`  | Preview the production build locally |
| `npm run lint`     | Run ESLint                           |
| `npm run format`   | Format with Prettier                 |

## Deployment

The site deploys to Cloudflare Workers at `sandpiper-app.com` and `www.sandpiper-app.com` (see `wrangler.jsonc`).

```bash
npm run build
npx wrangler deploy --cwd dist
```

You need to be logged in to Cloudflare (`npx wrangler login`) and have access to the Sandpiper account.

To preview the built Worker locally:

```bash
npm run build
npx wrangler dev --cwd dist
```

## Project structure

```
src/
├── routes/           # File-based routes (/, /privacy, /terms)
├── components/       # UI components (Nav, Globe, PhoneFrame, etc.)
├── i18n/             # Translations and language provider
├── lib/              # Utilities and SSR error handling
├── server.ts         # Cloudflare Worker entry (SSR error wrapper)
└── styles.css        # Global styles and theme tokens
```

Routes live in `src/routes/`. Shared components go in `src/components/`. Translations are defined in `src/i18n/translations.ts`.

## Configuration

- **`vite.config.ts`** — TanStack Start + Nitro + Cloudflare plugin (via `@lovable.dev/vite-tanstack-config`)
- **`wrangler.jsonc`** — Worker name, compatibility flags, and custom domains

The Worker entry point is `src/server.ts`, which wraps TanStack Start's server handler with branded error pages for SSR failures.

## License

Private — all rights reserved.
