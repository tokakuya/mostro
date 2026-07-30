# 桃色CODE (Mostro)

A 4-koma manga viewer built with **Astro**, **Vue 3**, **Tailwind CSS v4**, and **DaisyUI v5**. It's a fully static site with no database or external services — all manga pages are stored as images under `src/assets/manga/`.

The site ships two visual modes:

- **Modern mode** — a responsive DaisyUI layout with a desktop sidebar and a mobile drawer.
- **Vintage mode** — a faithful recreation of the original FC2 blog design, toggleable at runtime.

## Project structure

```text
/
├── public/                # Static files served as-is (favicon, robots.txt)
├── src/
│   ├── assets/
│   │   ├── manga/         # Episode images, one folder per episode
│   │   └── top/           # Top-page archive images and feed
│   ├── components/        # Astro/Vue components (modern + vintage/ widget/)
│   ├── layouts/           # Layout.astro (page shell), ThreePanel.astro (site chrome)
│   ├── lib/                # Manga data loading/parsing helpers
│   └── pages/              # Routes: / (top), /viewer, /manga.json
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm install`   | Installs dependencies                       |
| `pnpm dev`       | Starts local dev server at `localhost:4321` |
| `pnpm build`     | Builds the production site to `./dist/`     |
| `pnpm preview`   | Previews the production build locally       |
| `pnpm astro ...` | Runs Astro CLI commands                     |

## Notes

- The viewer is client-side: `pnpm build` only prerenders a few routes (`/`, `/viewer`, `/manga.json`); episodes are navigated at runtime via `?page=<n>`.
- The Cloudflare adapter is currently commented out in `astro.config.mjs`, so the site builds as static output by default.
- See `AGENTS.md` for notes specific to running this project in an agent/CI environment.
