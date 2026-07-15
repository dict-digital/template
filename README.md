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
│           ├──index.md
│           └──gibraltar/index.md <- 複数階層のパスも可能
└── package.json
```
