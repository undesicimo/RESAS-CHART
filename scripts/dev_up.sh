#!/bin/bash

# 該当Next.js開発環境立ち上げ

set -eu

# 事前にrootの .env.sample を参照して.env.localファイルを作成ください
# env.localチェック
if [ ! -e .env.local ]; then
  echo "Error: .env.local file not found."
  exit 1
fi

# コンテナ起動
next dev -p 4000
