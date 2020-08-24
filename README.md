# アプリ名
chat-space

## アプリの概要
テックキャンプの課題で、チャットアプリを作成しました

## 機能一覧
・deviseを用いたユーザー新規登録、ログイン機能<br>
・JSON APIを用いた非同期でのチャット投稿機能<br>
・インクリメンタルサーチでのユーザーの検索機能<br>
・チャットグループへのユーザー招待機能<br>
・画像送信機能<br>
・チャットの自動更新<br>

## 使用言語
ruby 2.5.1<br>
Rails 5.0.7.2<br>
MySQL<br>
Haml<br>
SCSS<br>
JavaScript<br>
AWS<br>

## 接続先情報
http://18.180.169.249

### テスト用アカウント
メールアドレス: test@test<br>
パスワード: 1234567o<br>

### 動作確認方法
・Chromeの最新版を利用してアクセスしてください。<br>
・テストアカウントでログイン→テストグループにて新規投稿<br>
・確認後、ログアウト処理をお願いします。<br>

## 今後追加したい機能
・投稿の編集、削除機能<br>
・リマインダー機能<br>
・投稿のリンク化機能<br>
・ユーザーへのメンション機能<br>

## 工夫した点
・カリキュラムを参考にしながらの実装でしたが、ここはどうしてそのコードになるのか、など<br>
一つ一つ考えながら実装するようにしました<br>
・コードのコピペは行わず、必ず写経するようにしました<br>
・疑問に感じたことは、そのままにせず質問を行うようにしました<br>

## デモ

# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups, through: :groups_users
- has_many :messages
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
- belongs_to :user
- belongs_to :group
