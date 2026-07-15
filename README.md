# dict.digital template

## ディレクトリ構造

```
/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── _headers
│   └── _redirects
├── app
│   ├── assets
│   │   └── global.scss
│   ├── components
│   │   └── Header.vue
│   ├── layouts
│   │   └── default.vue
│   ├── pages
│   │   └── index.vue
│   └── var
│       └── msg.ts
├── content
│   └── dict <- ファイル名は全て"index.md"
│       └── gb
│           ├──index.md <- 国家の場合ISO 3166-1に従う（ドメイン名とおおかた一致するが，GBなど例外あり）
│           └──gibraltar/index.md <- 複数階層のパスも可能
└── package.json
```
