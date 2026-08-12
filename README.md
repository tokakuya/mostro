# 桃色CODE (Mostro)

4コマ漫画「桃色CODE」を読むための静的サイトです。**Astro**・**Vue 3**・**Tailwind CSS v4**・**DaisyUI v5** で構築されており、データベースや外部サービスを持たない完全な静的サイトとして動作します。全話の画像は `src/assets/manga/` にエピソードごとに保存されています。

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.ico / favicon.svg
│   └── robots.txt
├── src
│   ├── assets/manga/      # 各話の漫画画像
│   ├── assets/top/        # トップページのヒーロー画像
│   ├── components/        # Vue / Astro コンポーネント（ビューアー、ウィジェットなど）
│   ├── layouts/           # Layout.astro（HTMLシェル）、ThreePanel.astro（サイト全体のレイアウト）
│   ├── lib/                # 漫画データの取得・解析ロジック
│   └── pages/              # index.astro（トップ）、viewer.astro（ビューアー）
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
| :--------------- | :-------------------------------------------- |
| `pnpm install`   | Installs dependencies                         |
| `pnpm dev`       | Starts local dev server at `localhost:4321`   |
| `pnpm build`     | Build your production site to `./dist/`       |
| `pnpm preview`   | Preview your build locally, before deploying  |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## 👀 Want to learn more?

このプロジェクトは [Astro](https://docs.astro.build) をベースにしています。開発環境や運用上の注意点は `AGENTS.md` も参照してください。
