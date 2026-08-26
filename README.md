# 桃色CODE ビューアー

4コマ漫画「桃色CODE」を無料で読めるビューアーサイトです。**Astro** + **Vue 3** + **Tailwind CSS v4 / DaisyUI v5** で構築された、データベースやサーバーを持たない完全な静的サイトです。

公開URL: https://mo4koma.iranika.info

## 特徴

- 最新話から第1話まで、スマホ・PCで快適に閲覧できるビューアー
- 通常モードに加え、レトロなFC2ブログ風の「ヴィンテージモード」を切り替え可能
- ライト/ダークテーマの自動・手動切り替え
- 全話・全ページを `src/assets/manga/` にローカル同梱、ビルド時に最適化

## プロジェクト構成

```text
/
├── public/                # favicon, robots.txt, sitemap.xml
├── src
│   ├── assets
│   │   ├── manga/          # 各話の漫画画像（約397話 / 約893枚)
│   │   └── top/            # トップページ用イラスト・OGP画像
│   ├── components
│   │   ├── ViewerContent.vue        # 通常ビューアー本体
│   │   ├── VintageViewerContent.vue # ヴィンテージビューアー本体
│   │   ├── vintage/                 # ヴィンテージモード用コンポーネント
│   │   └── widget/                  # ナビ・フッター等の共通パーツ
│   ├── layouts/            # Layout.astro / ThreePanel.astro
│   ├── lib/                 # manga データの読み込み・整形ロジック
│   └── pages/               # index (TOP) / viewer / manga.json
└── package.json
```

## コマンド

すべてプロジェクトルートで実行します。

| コマンド                | 説明                                      |
| :---------------------- | :---------------------------------------- |
| `pnpm install`           | 依存関係をインストール                    |
| `pnpm dev`               | 開発サーバーを起動 (`localhost:4321`)     |
| `pnpm build`             | `./dist/` に本番ビルドを出力              |
| `pnpm preview`           | 本番ビルドをローカルでプレビュー          |
| `pnpm astro ...`         | `astro add` などの Astro CLI コマンド実行 |

## 補足

- ビューアーはクライアントサイド動作です。ビルドで生成される静的ルートは `/`・`/viewer`・`/manga.json` のみで、各話は `?page=<n>` クエリを使って実行時に Vue ビューアーが描画します。
- 開発環境に関する詳細は [`AGENTS.md`](./AGENTS.md) を参照してください。
