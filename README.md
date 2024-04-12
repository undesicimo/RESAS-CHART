# 都道府県別の人口推移グラフウェブアプリ

## 概要

- 都道府県別の人口推移グラフを表示するウェブアプリです。
- [RESAS](https://resas.go.jp/#/13/13101)（地域経済分析システム）API を使用しています。

## 最初に

- `env.local.sample`を参考し、root 配下にて`env.local`を作成してください。

> [!IMPORTANT]  
> RESAS API の API キーが必要です。[こちら](https://opendata.resas-portal.go.jp/)に登録し、取得してください。

> [!NOTE]  
> BASE_URL に関しては[こちら](https://opendata.resas-portal.go.jp/docs/api/v1/index.html)を参照してください。

## コンテナの起動

1. Docker を起動してください。
> [!NOTE]  
> Docker をインストールしていない場合は、こちらのリンクを[参照](https://docs.docker.com/get-docker/)して下さい。
2. `npm run container:start`を実行し、Docker コンテナが起動します。
3. `http://localhost:3000` をアクセスしてください。

## 開発環境

1. root ディレクトリにて`npm install`を実行してください。
2. `npm run dev`を実行し、開発環境が立ち上がります。
3. `http://localhost:4000` をアクセスしてください。
