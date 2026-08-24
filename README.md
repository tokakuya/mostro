# Mostro

「桃色CODE」の4コマ漫画をまとめて読めるビューアーサイトです。**Astro** + **Vue 3** + **Tailwind CSS v4** + **DaisyUI v5** で構築された、データベースや外部サービスを持たない完全な静的サイトです。

## プロジェクト構成

```text
/
├── public/              favicon など静的ファイル
├── src
│   ├── assets/manga/    4コマ画像（話数ごとのフォルダ）
│   ├── assets/top/      トップページ用アセット
│   ├── assets/vintage/  レトロ表示モード用アセット
│   ├── components/      Astro / Vue コンポーネント
│   ├── layouts/         ページレイアウト
│   ├── lib/             データ取得・整形ロジック
│   └── pages/           ルーティング（`/`、`/viewer`、`/manga.json`）
└── package.json
```

## 🧞 コマンド

すべてプロジェクトルートで実行します（Node.js 22.12.0 以上が必要です）。

| コマンド                | 内容                                              |
| :---------------------- | :------------------------------------------------ |
| `pnpm install`           | 依存関係のインストール                            |
| `pnpm dev`               | 開発サーバーを `localhost:4321` で起動             |
| `pnpm build`             | `./dist/` に本番用ビルドを出力                    |
| `pnpm preview`           | 本番ビルドをローカルでプレビュー                  |
| `pnpm astro ...`         | Astro CLI コマンド（`astro add`、`astro check` など） |
| `pnpm generate-types`    | Cloudflare Workers 用の型定義を生成               |

## 開発メモ

セットアップ上の注意点（lint スクリプトが無いこと、Cloudflare アダプタが無効化されていることなど）は [AGENTS.md](./AGENTS.md) を参照してください。
