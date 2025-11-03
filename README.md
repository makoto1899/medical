# Medical PWA

ReactJSで作成されたProgressive Web Application（PWA）のベースプロジェクトです。

## 特徴

- ⚡ 高速なパフォーマンス
- 📱 オフライン対応
- 🔔 プッシュ通知対応
- 📲 ホーム画面にインストール可能
- 🎨 レスポンシブデザイン
- 🕐 リアルタイム時計表示
- 🔀 ページ遷移機能（React Router）

## 機能

### ホーム画面
- リアルタイムで更新される時計と日付表示
- 2つのナビゲーションボタン
  - 📋 医療情報管理ページへ
  - 🏥 予約管理ページへ

### ページ1（医療情報管理）
- 患者データベース
- 診療履歴
- 処方箋管理
- 検査結果

### ページ2（予約管理）
- オンライン予約
- スケジュール管理
- リマインダー通知
- 待ち時間の最適化

## セットアップ

### 前提条件

Node.js (v14以上) がインストールされている必要があります。

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm start
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリを確認できます。

### プロダクションビルド

```bash
npm run build
```

最適化されたプロダクションビルドが `build` フォルダに作成されます。

### GitHub Pagesへのデプロイ

このアプリをGitHub Pagesで公開する手順：

#### 1. package.jsonの設定

`package.json`の`homepage`フィールドを自分のGitHubユーザー名とリポジトリ名に変更してください：

```json
"homepage": "https://yourusername.github.io/medical"
```

例: ユーザー名が`makoto`、リポジトリ名が`medical`の場合：
```json
"homepage": "https://makoto.github.io/medical"
```

#### 2. GitHubリポジトリの作成

```bash
# Gitの初期化（まだの場合）
git init

# ファイルを追加
git add .
git commit -m "Initial commit"

# GitHubリポジトリと連携
git remote add origin https://github.com/yourusername/medical.git
git branch -M main
git push -u origin main
```

#### 3. gh-pagesのインストール

```bash
npm install
```

#### 4. デプロイ

```bash
npm run deploy
```

このコマンドで自動的に：
- プロダクションビルドが作成される
- `gh-pages`ブランチが作成される
- ビルドされたファイルがGitHub Pagesに公開される

#### 5. GitHub Pagesの有効化

1. GitHubのリポジトリページにアクセス
2. **Settings** > **Pages** に移動
3. **Source** が `gh-pages` ブランチになっていることを確認
4. 数分後、`https://yourusername.github.io/medical` でアプリが公開されます

#### デプロイコマンド

```bash
# 開発とデプロイのワークフロー
npm start          # ローカル開発
npm run build      # ビルドのみ（デプロイしない）
npm run deploy     # ビルドしてGitHub Pagesにデプロイ
```

### テストの実行

```bash
npm test
```

## PWA機能

このアプリはPWAとして動作します：

- **オフライン対応**: Service Workerによりオフラインでも動作
- **インストール可能**: ホーム画面に追加可能
- **高速**: キャッシュ戦略により高速な読み込み
- **レスポンシブ**: モバイルとデスクトップの両方に対応

## プロジェクト構造

```
medical/
├── public/
│   ├── index.html          # HTMLテンプレート
│   ├── manifest.json       # PWAマニフェスト
│   └── robots.txt
├── src/
│   ├── App.js              # メインアプリコンポーネント（ホーム画面）
│   ├── App.css             # アプリのスタイル
│   ├── PageOne.js          # ページ1コンポーネント
│   ├── PageOne.css         # ページ1のスタイル
│   ├── PageTwo.js          # ページ2コンポーネント
│   ├── PageTwo.css         # ページ2のスタイル
│   ├── index.js            # エントリーポイント（ルーター設定）
│   ├── index.css           # グローバルスタイル
│   ├── serviceWorkerRegistration.js  # Service Worker登録
│   └── reportWebVitals.js  # パフォーマンス測定
├── package.json
└── README.md
```

## 使用技術

- **React 18.2** - UIライブラリ
- **React Router 6** - ページ遷移
- **Service Worker** - オフライン対応
- **PWA** - プログレッシブウェブアプリ

## 次のステップ

1. Node.jsをインストール（未インストールの場合）
2. `npm install` で依存関係をインストール
3. `npm start` で開発を開始
4. アプリをカスタマイズ

## ライセンス

MIT

