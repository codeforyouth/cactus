# cuctus

> Nuxt.js TypeScript project

# 開発について
## Git開発フロー
+ 基本はGitHub-Flowに準拠する
  + masterブランチがリリースブランチを兼ねる
  + masterブランチから生やしたトピックブランチをfeatureブランチとする
    + featureブランチに問題がなければmasterにマージする
+ 実際のリリースブランチがmasterを使うのか、別ブランチを切るのかは未定

## 技術構成
+ Nuxt.js(vue.js)を使用
  + HTMLは原則Pug
  + ScriptはTypeScript
  + CSSはStylus

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
