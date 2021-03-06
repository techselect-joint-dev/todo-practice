# このリポジトリは共同開発のフロントエンドプロジェクトを管理しています

# 環境

- Vue3(Vite を用いて構築)
- VueRouter
- [TailwindCSS](https://tailwindcss.com/docs/flex-basis)
- Netlify によるデプロイ

## 今後導入したい

- Jest
- TypeScript

参考記事

- [Vite で Vue3 + VueRouter + TailwindCSS の環境をつくる ②](https://www.sk-lab.co.jp/archives/11217)
- [TailwindCSS を始めようとしている人へ](https://zenn.dev/nbr41to/articles/276f40041ad9fe)

# ディレクトリ構成

```
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── modules
│   │   │   └── XXX.vue
│   │   └── pages
│   │       └── XXX.vue
│   ├── index.css
│   ├── main.js
│   └── router
│       └── index.js
```

- `modules`

  再利用可能なコンポーネント群です。どんどんぶち込んでいきます。

- `pages`

  modules を使ってページを構成します。再利用しないものならばここに直接書いたりもします。vue-router から呼ばれます。

# Git を使った共同開発

```
$ git clone https://github.com/techselect-joint-dev/todo-practice.git
```

## ⓪ 自分の担当したい issue を選んで Assignees を自分に設定する。

<img width="580" alt="スクリーンショット 2021-07-05 22 21 47" src="https://user-images.githubusercontent.com/58542696/124477921-8db7a380-dddf-11eb-9831-a84a1b9022f0.png">

## ① リモートリポジトリとローカルリポジトリを同期する

```
$ git switch main
$ git pull
```

## ② 作業用のブランチをきる

```
$ git switch -c "<issueの番号を先頭につけるといいかも>"
```

`-c`は create から由来する。<br>

## ③ ファイルに変更を加える

```
$ git add <ファイル名>
```

`git add .`とするとディレクトリ配下の全ての変更を add することができる。

```
$ git commit -m "コミットメッセージ"
```

## ④ 自分が加えた変更をリモートリポジトリへ push する。<br>

**【push する前に確認すること】**<br>
複数人で開発していくと自分が作業している間にリモートリポジトリの main ブランチがどんどん更新されていきます。<br>
そのため push する直前にローカルの main ブランチを更新して自分の作業ブランチに取り込む必要があります。<br>
`$ git switch main`→`$ git pull`→`$ git switch <自分の作業ブランチ>`→`$ git merge main`<br>
これで最新の main ブランチからブランチを切って作業した PR を作成することができます。

```
$ git push origin <自分の作業ブランチ>
```

`git push origin HEAD`とすると自分が現在作業しているブランチを指定することができる。<br>

## ⑤ GitHub 上で作業ブランチ →main ブランチへの PR を作成する。<br>

## ⑥ レビューが通ったら merge する。

# ローカルでの開発手順

## 1. サーバを立ち上げる

```
$ npm run dev
```
