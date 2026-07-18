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
│   ├── app.config.ts <- 利用者が操作
│   ├── assets
│   │   └── global.scss
│   │   └── i18n.json <- 利用者が操作
│   ├── components
│   │   └── Header.vue
│   ├── layouts
│   │   └── default.vue
│   ├── pages
│   │   └── index.vue
│   └── var
│       └── msg.ts
├── content
│   └── dict <- 利用者が主に操作するディレクトリ．ファイル名は全て"index.md"
│       └── gb
│           ├──index.md
│           └──gibraltar/index.md <- 複数階層のパスも可能
└── package.json
```
