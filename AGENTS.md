# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Mostro is a Japanese manga (4-koma) viewer built with **Astro**, **Vue 3**, **Tailwind CSS v4**, and **DaisyUI v5**. It is a fully static site with no database or external services. All manga assets (~893 images across ~397 episodes) are stored in `src/assets/manga/`.

### Commands

Standard commands are documented in `README.md` and `package.json`:

- **Dev server**: `pnpm dev` — starts at `localhost:4321`
- **Build**: `pnpm build` — outputs to `./dist/`
- **Preview**: `pnpm preview` — preview production build

### Notes

- **Type checking**: `pnpm check` (or `pnpm astro check`) runs `@astrojs/check` against the Astro/Vue/TS sources. Both are in `devDependencies`, so it runs non-interactively.
- **pnpm build scripts warning**: After `pnpm install`, pnpm warns about ignored build scripts for `esbuild`, `sharp`, and `workerd`. The dev server and build still work correctly without approving them, since esbuild ships prebuilt binaries and sharp/workerd are only needed for image optimization and Cloudflare Workers deployment respectively.
- **Cloudflare adapter is commented out** in `astro.config.mjs`. The project builds as a static site by default.
- **The viewer is client-side.** `pnpm build` outputs only a few static routes (`/`, `/viewer`, and the `/manga.json` data endpoint); all ~396 episodes / ~894 images in `src/assets/manga/` are navigated at runtime by the Vue viewer via `?page=<n>` rather than pre-rendered as separate pages.
