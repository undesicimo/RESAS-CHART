#!/bin/bash

# 該当Next.jsアプリをコンテナで起動する

set -eu

# 事前にrootの .env.sample を参照して.env.localファイルを作成ください
# env.localチェック
if [ ! -e .env.local ]; then
  echo "Error: .env.local file not found."
  exit 1
fi

cd $(dirname $0)/../docker

# コンテナ起動
docker compose up
