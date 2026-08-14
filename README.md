# 桃色CODE (Mostro)

A static viewer for the 桃色CODE 4-koma manga, built with [Astro](https://astro.build), Vue 3, Tailwind CSS v4, and DaisyUI v5. All ~900 manga page images live under `src/assets/manga/` and are browsed at runtime through the `/viewer` route.

## Project Structure

```text
/
├── public/                  # favicon
├── src
│   ├── assets/manga/        # manga page images, grouped by episode
│   ├── assets/top/          # top page hero art and archive thumbnails
│   ├── assets/vintage/      # legacy "vintage" theme assets
│   ├── components/          # Astro + Vue components (widgets, viewer, vintage UI)
│   ├── layouts/              # Layout.astro (document shell), ThreePanel.astro (page chrome)
│   ├── lib/                  # manga data loading/parsing, site links
│   └── pages/                # index.astro (top page), viewer.astro, manga.json.ts
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                        |
| :---------------------- | :--------------------------------------------- |
| `pnpm install`          | Installs dependencies                          |
| `pnpm dev`              | Starts local dev server at `localhost:4321`    |
| `pnpm build`            | Build the production site to `./dist/`         |
| `pnpm preview`          | Preview the production build locally           |
| `pnpm astro ...`        | Run CLI commands like `astro add`, `astro check` |

## Notes

- The site is fully static — no database or external services. The manga viewer navigates pages client-side via `?page=<n>` rather than pre-rendering every episode as its own route.
- The Cloudflare adapter in `astro.config.mjs` is commented out; the project builds as a plain static site by default.
- See `AGENTS.md` for notes on running this project in agent/CI environments.
