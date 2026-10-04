# フットサル大会 対戦成績アプリ

## 1. Firebase設定（約10分）
1. Firebaseコンソールでプロジェクト作成 → **Realtime Database** を作成（リージョンは任意）
2. **Authentication** → ログイン方法で「メール/パスワード」を有効化 → 編集者のユーザーを追加（編集させたい人だけ）
3. Realtime Database →「ルール」に `database.rules.json` の内容を貼り付けて公開
   （誰でも閲覧可・ログインした編集者のみ書き込み可）
4. プロジェクトの設定 → マイアプリ（Web）の値を `config.js` に貼り付け
5. Authentication → 設定 → 承認済みドメインに `<ユーザー名>.github.io` を追加

## 2. GitHub Pagesで公開
1. GitHubで新規リポジトリ作成 → このフォルダの中身をすべてアップロード（Add file → Upload files）
2. Settings → Pages → Branch を `main` / `(root)` にして Save
3. 数分後 `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます
4. iPhone: Safariで開く → 共有 → 「ホーム画面に追加」

## 仕組み
- 閲覧者はFirebase SDKを読み込まず、20秒ごとにデータを取得（軽量・同時接続数の制限を受けません）
- 編集者はログイン後のみ登録/結果登録タブが表示され、リアルタイムで保存
- 最後のデータは端末にも保存され、次回起動時に即表示
- 「登録」タブ最下部からバックアップ(JSON)を保存できます
