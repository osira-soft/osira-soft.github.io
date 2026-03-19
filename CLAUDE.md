# CLAUDE.md

## 指示
会話の最後に、今日やったこと・決めたこと・次にやること を
このファイルの「## 作業ログ」セクションに追記してください。

## プロジェクト概要

osira-soft の公式サイト兼アプリランディングページ。GitHub Pages でホスティングされる静的サイト。

## 技術スタック

- 純粋な HTML / CSS（ビルドツール・フレームワークなし）
- npm / Node.js 不使用
- デプロイ: GitHub Pages（`main` ブランチへの push で自動公開）

## ディレクトリ構成

```
/
├── index.html        # トップページ（会社・アプリ一覧）
├── style.css         # 共通スタイル
└── cmdlang/
    ├── index.html    # CmdLang アプリ紹介ページ
    └── privacy.html  # プライバシーポリシー
```

## デザイン方針

- Apple の Web デザインを参考にしたミニマルなスタイル
- フォント: `-apple-system, BlinkMacSystemFont` ベースのシステムフォント
- ライト / ダークモード対応（CSS カスタムプロパティ使用）
- モバイルレスポンシブ

## 作業ルール

- 新しいアプリページは `/{app-name}/index.html` と `/{app-name}/privacy.html` で構成する
- `style.css` は全ページ共通で使用するため、アプリ固有のスタイルは追加ページ内 `<style>` タグに記述する
- 日本語で記述（ページコンテンツ・コメントとも）
- ビルドプロセスは不要。ファイルを直接編集してコミット・プッシュ

## 作業ログ

### 2026-03-16
- CLAUDE.md を作成
- osira-soft ロゴを作成（`logo.svg`）: 青背景 `#0071E3`、白文字「OSS」、明朝体（Georgia）、角丸正方形
- 全ページ（index.html, cmdlang/index.html, cmdlang/privacy.html）にファビコンとして設定
- GitHub プロフィール用 PNG を生成（`logo.png`, 512×512px）
- `logo-512.svg` の text の y 位置を 256 → 310 に調整（AppKit レンダリング時の縦ズレを修正）
- PNG 変換は `osascript` + AppKit (NSImage) を使用（sips/qlmanage はぼやけ・余白の問題あり）

### 2026-03-19
- TideScope App Store 公開に伴い、ダウンロードリンクを更新（`tidescope/index.html`）
  - GitHub リンク → App Store URL（https://apps.apple.com/jp/app/tidescope/id6760695853）
  - 「近日公開予定」「審査申請準備中」テキストを削除
