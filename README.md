# Mostro（桃色CODE）

「桃色CODE」— 雑談や日常のひとコマを描いた4コマ漫画の掲載サイトです。**Astro** / **Vue 3** / **Tailwind CSS v4** / **DaisyUI v5** で構築された、データベースや外部サービスに依存しない完全な静的サイトです。

過去のFC2ブログのレイアウトを再現した「vintageモード」も切り替えて利用できます。

## 🚀 プロジェクト構成

```text
/
├── public/                 favicon などの静的ファイル
├── src
│   ├── assets/manga/       各話の漫画画像
│   ├── assets/top/         トップページのヒーロー画像・アーカイブ
│   ├── assets/vintage/     vintageモード用アセット
│   ├── components/         Astro / Vue コンポーネント
│   ├── layouts/            ページレイアウト
│   ├── lib/                漫画データの読み込み・整形ロジック
│   └── pages/               ルーティング（/, /viewer, /manga.json）
└── package.json
```

ビューアーはクライアントサイドで動作し、`pnpm build` の出力は `/`・`/viewer`・`/manga.json` の数ページのみです。各話・各ページは `?page=<n>` パラメータをもとに Vue コンポーネントが実行時に描画します。

## 🧞 コマンド

すべてプロジェクトルートで実行します。

| コマンド              | 内容                                              |
| :-------------------- | :------------------------------------------------ |
| `pnpm install`         | 依存関係のインストール                             |
| `pnpm dev`             | ローカル開発サーバーを起動（`localhost:4321`）      |
| `pnpm build`           | 本番用ビルドを `./dist/` に出力                    |
| `pnpm preview`         | ビルド済みサイトをローカルでプレビュー              |
| `pnpm astro ...`       | `astro add` など Astro CLI コマンドを実行           |

## 🛠️ 技術スタック

- [Astro](https://astro.build) — 静的サイトジェネレーター
- [Vue 3](https://vuejs.org) — ビューアーのインタラクティブ部分
- [Tailwind CSS v4](https://tailwindcss.com) / [DaisyUI v5](https://daisyui.com) — スタイリング
