# 桃色CODE (Mostro)

「桃色CODE」の4コマ漫画を読むための、静的サイト製ビューアです。**Astro** + **Vue 3** + **Tailwind CSS v4** + **DaisyUI v5** で構築されており、データベースや外部サービスを持たない完全な静的サイトとして動作します。全話・全ページの画像（約400話 / 約900枚）は `src/assets/manga/` にそのまま同梱されています。

## 🚀 プロジェクト構成

```text
/
├── public/                    favicon などの静的ファイル
├── src
│   ├── assets
│   │   ├── manga/              各話の画像（{話数}_{タイトル}/*.jpg）
│   │   ├── top/                トップページ用画像・アーカイブ
│   │   └── vintage/             ビンテージモード用アセット
│   ├── components
│   │   ├── widget/              ナビ・フッター・設定などの小部品
│   │   ├── vintage/              ビンテージモード用コンポーネント
│   │   ├── ViewerContent.vue     ビューア本体（無限スクロール）
│   │   └── MainPanel.astro       トップページのメインパネル
│   ├── layouts/                 Layout.astro / ThreePanel.astro
│   ├── lib/                     漫画データの読み込み・整形ロジック
│   └── pages/                   /, /viewer, /manga.json
└── package.json
```

## 🧞 コマンド

すべてリポジトリのルートで実行します。

| コマンド              | 内容                                              |
| :-------------------- | :------------------------------------------------ |
| `pnpm install`         | 依存関係のインストール                            |
| `pnpm dev`             | 開発サーバーを `localhost:4321` で起動            |
| `pnpm build`           | 本番用ビルドを `./dist/` に出力                   |
| `pnpm preview`         | ビルド済みサイトをローカルでプレビュー            |
| `pnpm astro ...`       | `astro add` などの Astro CLI コマンドを実行       |

## 📖 ビューアの仕組み

- `/viewer?page=<話数>` でアクセスすると、Vue製の `ViewerContent` が該当話から画像を読み込みます。
- スクロールに応じて前後の話を動的に読み込む無限スクロール方式で、ビルド時に全話を個別ページとして出力するのではなく、`src/lib/mangaData.ts` が `src/assets/manga/` を実行時に解決します。
- 次話の画像は接続状況（`navigator.connection`）を見た上でアイドル時にプリロードされ、低速回線やセーブデータモードでは行われません。
- 開発モードとビルド後で画像パスの解決順序が異なる場合に備え、フォールバック読み込み（`onerror` での再試行）を備えています。

## 🎨 表示モード

- ライト/ダークテーマ、および「ビンテージモード」（`src/components/vintage/`）をユーザーが切り替え可能です。設定は `localStorage` に保存されます。

## 備考

- `astro.config.mjs` では Cloudflare アダプターはコメントアウトされており、デフォルトでは静的サイトとしてビルドされます。Cloudflare Workers へのデプロイ設定は `wrangler.jsonc` を参照してください。
- `pnpm astro check` を使う場合は `@astrojs/check` と `typescript` を別途インストールしてください（非対話環境では自動インストールのプロンプトが止まります）。
