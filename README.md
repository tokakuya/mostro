# 桃色CODE (Mostro)

4コマ漫画『桃色CODE』を読めるファンサイトです。**Astro** / **Vue 3** / **Tailwind CSS v4** / **DaisyUI v5** で構築された、データベースや外部サービスを持たない完全な静的サイトです。

最新話を読める通常モードに加えて、旧FC2ブログ時代のデザインを再現した「レトロモード」でも閲覧できます。漫画画像（約897枚 / 約398話分）はすべて `src/assets/manga/` に格納されています。

## 🧞 コマンド

すべてリポジトリのルートから実行します。

| コマンド          | 内容                                       |
| :---------------- | :----------------------------------------- |
| `pnpm install`    | 依存関係のインストール                     |
| `pnpm dev`        | 開発サーバーを `localhost:4321` で起動     |
| `pnpm build`      | `./dist/` へ本番用ビルドを出力             |
| `pnpm preview`    | ビルド結果をローカルでプレビュー           |
| `pnpm astro ...`  | `astro add` などの Astro CLI コマンドを実行 |

## 📁 構成

```text
/
├── public/                # favicon など静的ファイル
├── src
│   ├── assets/manga/      # 各話の漫画画像
│   ├── assets/vintage/    # レトロモード用アセット
│   ├── components/        # Astro / Vue コンポーネント
│   ├── layouts/           # ページレイアウト
│   ├── lib/                # 漫画データの読み込み・整形ロジック
│   └── pages/              # ルーティング（/, /viewer, /manga.json）
└── package.json
```

詳細な開発メモは `AGENTS.md` を参照してください。
