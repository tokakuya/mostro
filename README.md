# 桃色CODE (Mostro)

4コマ漫画「桃色CODE」を無料で読めるビューアーサイトです。**Astro** + **Vue 3** + **Tailwind CSS v4** + **DaisyUI v5** で構築した、データベースや外部サービスに依存しない完全静的サイトです。

- サイト: https://mo4koma.iranika.info
- 全話数の漫画アセットは `src/assets/manga/` にエピソードごとのフォルダで格納しています
- ビューアーはクライアントサイド（Vue）で動作し、`/viewer?page=<n>` でエピソードを切り替えます

## 🚀 プロジェクト構成

```text
/
├── public/                  # favicon, robots.txt, sitemap.xml など
├── src
│   ├── assets/manga/        # 話数ごとの漫画画像
│   ├── components/          # Astro / Vue コンポーネント
│   ├── layouts/              # ページレイアウト
│   ├── lib/                  # 漫画データの読み込み・整形ロジック
│   └── pages/                # ルーティング（index, viewer, manga.json）
└── package.json
```

## 🧞 コマンド

すべてリポジトリのルートで実行します。

| コマンド                  | 内容                                              |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | 依存関係のインストール                            |
| `pnpm dev`                 | 開発サーバーを `localhost:4321` で起動             |
| `pnpm build`                | `./dist/` へ本番ビルド                            |
| `pnpm preview`              | 本番ビルドをローカルでプレビュー                    |
| `pnpm astro ...`            | `astro add` などの Astro CLI コマンド             |

## メモ

- lint スクリプトは未設定です。`pnpm astro check` は `@astrojs/check` / `typescript` のインタラクティブなインストールを促すため、非対話環境では事前に依存を追加してから実行してください。
- `astro.config.mjs` では Cloudflare アダプターをコメントアウトしており、デフォルトでは静的サイトとしてビルドされます。
