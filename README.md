# DictDigi Template

## Directory structure

```
/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── _headers
│   └── _redirects
├── app
│   ├── app.config.ts <- end can customise
│   ├── assets
│   │   └── global.scss
│   │   └── i18n.json <- end can customise
│   ├── components
│   │   └── Header.vue
│   ├── layouts
│   │   └── default.vue
│   ├── pages
│   │   └── index.vue
│   └── var
│       └── msg.ts
├── content
│   └── dict <- Directory for dictionary contents. The file name is required to be "index.md"
│       └── gb
│           ├──index.md
│           └──gibraltar/index.md <- multilayer path is allowed
└── package.json
```
