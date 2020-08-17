# アプリ名
chat-space

## アプリの概要
テックエキスパートの課題で、チャットアプリを作成しました

## 機能一覧
・deviseを用いたユーザー新規登録、ログイン機能<br>
・JSON APIを用いた非同期でのチャット投稿機能<br>
・インクリメンタルサーチでのチャット相手の検索機能<br>
・チャットグループへのユーザー招待機能<br>
・画像送信機能<br>
・チャットの自動更新<br>


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