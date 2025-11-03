# GitHub Pages デプロイガイド

このアプリケーションをGitHub Pagesで公開するための詳細な手順です。

## 準備

### 1. package.jsonの編集

`package.json`の`homepage`を自分のGitHubアカウントに合わせて変更：

```json
"homepage": "https://yourusername.github.io/medical"
```

**重要**: `yourusername`を自分のGitHubユーザー名に置き換えてください。

## デプロイ手順

### ステップ1: GitHubリポジトリの作成

1. [GitHub](https://github.com)にログイン
2. 新しいリポジトリ `medical` を作成
3. （Public または Private を選択）

### ステップ2: ローカルリポジトリの初期化

```bash
# Gitリポジトリを初期化
git init

# 全てのファイルを追加
git add .

# 初回コミット
git commit -m "Initial commit: Medical PWA"

# GitHubリポジトリを追加（URLを自分のものに変更）
git remote add origin https://github.com/yourusername/medical.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

### ステップ3: 依存関係のインストール

```bash
# gh-pagesパッケージを含む全ての依存関係をインストール
npm install
```

### ステップ4: デプロイ

```bash
# ビルドしてGitHub Pagesにデプロイ
npm run deploy
```

このコマンドは自動的に：
- `npm run build`を実行（プロダクションビルド）
- `gh-pages`ブランチを作成
- ビルドファイルを`gh-pages`ブランチにプッシュ

### ステップ5: GitHub Pagesの設定確認

1. GitHubのリポジトリページにアクセス
2. **Settings** タブをクリック
3. 左メニューから **Pages** を選択
4. **Source** セクションで以下を確認：
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. 数分待つと、URLが表示されます：
   ```
   Your site is published at https://yourusername.github.io/medical
   ```

## アップデート方法

コードを変更した後、再度デプロイするには：

```bash
# 変更をコミット
git add .
git commit -m "Update: 説明"
git push

# GitHub Pagesにデプロイ
npm run deploy
```

## トラブルシューティング

### 404エラーが出る場合

1. `package.json`の`homepage`が正しいか確認
2. GitHubのSettings > Pagesで`gh-pages`ブランチが選択されているか確認
3. 数分待ってから再度アクセス

### デプロイが失敗する場合

```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

### ルーティングが動作しない場合

GitHub Pagesは`BrowserRouter`の代わりに`HashRouter`を使用することを推奨：

`src/index.js`を編集：
```javascript
import { HashRouter } from 'react-router-dom';

// BrowserRouter を HashRouter に変更
<HashRouter>
  <Routes>
    ...
  </Routes>
</HashRouter>
```

## 参考リンク

- [GitHub Pages 公式ドキュメント](https://docs.github.com/ja/pages)
- [Create React App デプロイガイド](https://create-react-app.dev/docs/deployment/#github-pages)

