# KAZUE HANADA PORTFOLIO SITE

KAZUE HANADA の個人ポートフォリオサイト制作プロジェクト。

Web Designer / Visual Designer として、
ファッション、EC、Webデザイン、グラフィック、写真・動画などの制作実績を掲載する。

---

## 制作フロー

1. Figmaでデザイン作成
2. VS Code + Codexで実装
3. ローカル環境で確認
4. Gitでバージョン管理
5. GitHubへpush
6. GitHub Pagesで公開

---

## 使用技術

- HTML
- CSS
- JavaScript
- GSAP
- ScrollTrigger
- Swiper
- SVG Animation
- Adobe Fonts

必要に応じて追加する。

---

## 使用フォント

### Accent
- TT Cometus

### English / UI
- TT Commons Pro

### Japanese
- Zen Kaku Gothic New

---

## デザイン方向性

- Fashion Editorial
- Playful
- Handmade
- Refined
- Visual-first

一般的なWebデザイナーのポートフォリオではなく、
ファッションブランド、ファッション誌、クリエイティブスタジオのような、
作品画像を主役にしたエディトリアルなWebサイトを目指す。

ベースは洗練された構成にしつつ、
手描き要素やスクロールアニメーションなどで遊びを加える。

---

## デザインソース

Figmaをデザインの基準とする。

Figma上の以下の内容を優先する。

- レイアウト
- 余白
- フォントサイズ
- 行間
- 配色
- 画像サイズ
- 画像比率
- 位置関係
- アニメーション意図

デザインの再解釈や簡略化はせず、
基本的にFigmaを忠実に実装する。

---

## ディレクトリ構成

~~~text
PORTFOLIO_SITE/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── video/
│   └── svg/
├── README.md
└── AGENTS.md
~~~

今後ページや機能が増えた場合は、
必要に応じてディレクトリ構成を追加する。

---

## 画像・動画

### Images

保存場所：

~~~text
/assets/images/
~~~

使用方針：

- WebP / AVIFを優先する
- 必要に応じてJPEG / PNGも使用する
- 表示サイズに対して過度に大きな画像を使用しない
- `width` / `height` または `aspect-ratio` を設定する
- CLSをできるだけ防ぐ
- 作品画像は画質を保ちつつ、Web表示用に軽量化する

### Video

保存場所：

~~~text
/assets/video/
~~~

使用方針：

- 短尺・軽量動画を中心に使用する
- 自動再生する場合は原則として `muted` / `playsinline` を使用する
- 大容量動画はGitHubリポジトリへ直接置かず、必要に応じて外部ホスティングも検討する
- ポートフォリオの閲覧速度を損なわないようにする

### SVG

保存場所：

~~~text
/assets/svg/
~~~

主な用途：

- 手描き線
- 装飾
- アイコン
- ロゴ
- スクロール連動アニメーション
- 線描画アニメーション

---

## レスポンシブ

モバイルファーストで実装する。

### SP

- 基準幅：375px
- FigmaのSPデザインを基準にする
- 画像は大きく見せる
- 1カラムを基本にする
- 余白とタイポグラフィのバランスを重視する

### PC

- SPの単純拡大にはしない
- PC用Figmaデザインを基準にする
- 画像サイズや配置に変化をつける
- エディトリアルなレイアウトを意識する
- コンテンツの視覚的なリズムを重視する

---

## アニメーション

使用候補：

- フェード
- 画像の移動
- scale
- hoverアニメーション
- スクロール連動
- SVG線描画
- 手描き線が伸びるアニメーション
- sticky
- 画像切り替え
- テキストアニメーション
- Swiper

必要に応じてGSAP / ScrollTriggerを使用する。

アニメーションは、
サイトの世界観と作品の見せ方を補助する目的で使用する。

以下は避ける。

- すべての要素を動かす
- 意味のないアニメーション
- 操作性を損なう動き
- 読み込みを重くするだけの演出

---

## 動作確認

以下の環境を中心に確認する。

### Desktop

- Mac Chrome
- Mac Safari

### Mobile

- iPhone Safari
- iPhone Chrome

特に以下を確認する。

- レスポンシブ崩れ
- フォント表示
- 画像比率
- アニメーション
- sticky
- スクロール挙動
- hover
- タップ操作
- 動画再生
- CLS
- ページ読み込み速度
- Safari / iOS固有の表示差

---

## Git運用

Gitでバージョン管理する。

作業単位ごとにコミットする。

例：

~~~bash
git add .
git commit -m "Create hero section"
~~~

コミットメッセージは、
何を変更したか分かる簡潔な内容にする。

例：

~~~text
Initial portfolio project setup
Create hero section
Add approach section
Implement scroll animation
Adjust mobile spacing
Add works section
Fix Safari layout
Optimize images
~~~

大きな修正前には、
必要に応じてコミットして状態を残す。

---

## GitHub

GitHubにポートフォリオ用リポジトリを作成する。

想定リポジトリ名：

~~~text
portfolio-site
~~~

ローカルの `PORTFOLIO_SITE` フォルダと接続し、
GitHubへpushして管理する。

---

## 公開

GitHub Pagesで公開する予定。

公開フロー：

~~~text
Figma
↓
VS Code + Codex
↓
Git
↓
GitHub
↓
GitHub Pages
~~~

初期公開URL例：

~~~text
https://ユーザー名.github.io/portfolio-site/
~~~

GitHub Pages公開後、
このREADMEに実際の公開URLを追記する。

---

## 独自ドメイン

初期段階ではGitHub PagesのURLを使用する。

サイト完成後、
必要に応じて独自ドメインへの変更を検討する。

例：

~~~text
kazuehanada.com
~~~

独自ドメイン導入時も、
GitHub Pagesで継続運用できる構成を想定する。

---

## TODO

### Design

- [ ] SPトップデザイン完成
- [ ] SP全体デザイン完成
- [ ] PCトップデザイン作成
- [ ] PC全体デザイン完成
- [ ] WORKS構成決定
- [ ] ABOUT内容決定
- [ ] CONTACT内容決定

### Assets

- [ ] 掲載作品選定
- [ ] WORKS画像整理
- [ ] 画像WebP / AVIF化
- [ ] 動画素材整理
- [ ] SVG装飾作成
- [ ] 手描き要素作成

### Development

- [ ] HTML基本構造作成
- [ ] CSS基本設定
- [ ] Adobe Fonts設定
- [ ] Hero実装
- [ ] Approach実装
- [ ] WORKS実装
- [ ] ABOUT実装
- [ ] CONTACT実装
- [ ] レスポンシブ対応
- [ ] アニメーション実装
- [ ] SVG線描画実装
- [ ] hover調整
- [ ] 動画実装

### Testing

- [ ] Mac Chrome確認
- [ ] Mac Safari確認
- [ ] iPhone Safari確認
- [ ] iPhone Chrome確認
- [ ] Safari固有バグ確認
- [ ] CLS確認
- [ ] パフォーマンス確認
- [ ] 画像最適化確認
- [ ] 動画読み込み確認

### Git / Publish

- [ ] 初回コミット
- [ ] GitHubリポジトリ作成
- [ ] GitHub接続
- [ ] GitHubへpush
- [ ] GitHub Pages設定
- [ ] 公開URL確認
- [ ] READMEへ公開URL追記
- [ ] 独自ドメイン検討

---

## Notes

このプロジェクトは、
Staff StartなどのCMS制約があるLP制作とは異なり、
一般的なWebサイトとして自由度の高い実装を行う。

Figmaをデザインの基準とし、
VS Code + Codexを使用して実装する。

デザイン・コード・アニメーションともに、
作品そのものが主役になることを優先する。