# vui-vc-next (aka VUI.next)

[![npm](https://img.shields.io/npm/v/vui-vc-next)](https://www.npmjs.com/package/vui-vc-next) <a href="https://nikoni.top/vui-vc-next/" target="_blank"><img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=3366cc" alt="docs & demos" /></a>

> Yet another **lightweight** and **Vite-powered** Mobile web UI components based on **Vue 3** and **Vite 2**.
>
> `VUI.next` is for `Vite 2.x` and onward. Vite 1.x's demo is [archived](https://www.npmjs.com/package/vui-vc-next?activeTab=versions).

### Contains

- [x] [Vue](https://v3.vuejs.org/) [![npm](https://img.shields.io/npm/v/vue/next.svg)](https://www.npmjs.com/package/vue/v/next)
- [x] [Vue Router](https://router.vuejs.org/) [![npm](https://img.shields.io/npm/v/vue-router/next.svg)](https://www.npmjs.com/package/vue-router/v/next)
- [x] [Vite](https://github.com/vitejs/vite) [![npm](https://img.shields.io/npm/v/vite.svg)](https://www.npmjs.com/package/vite) [![node](https://img.shields.io/node/v/vite.svg)](https://nodejs.org/en/about/releases/)
  - [x] [Vue 3 SFC support via @vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue) [![npm](https://img.shields.io/npm/v/@vitejs/plugin-vue.svg)](https://npmjs.com/package/@vitejs/plugin-vue)
  - [x] [HMR](https://github.com/vitejs/vite#hot-module-replacement)
  - [x] [Dev Server Proxy](https://github.com/vitejs/vite#dev-server-proxy)
  - [x] [CSS Pre-processors](https://github.com/vitejs/vite#css-pre-processors)
    - [x] [Sass](https://sass-lang.com/) [![npm](https://img.shields.io/pub/v/sass.svg)](https://www.npmjs.com/package/sass)
- [x] [Vitepress](https://github.com/vuejs/vitepress) [![npm](https://img.shields.io/npm/v/vitepress)](https://www.npmjs.com/package/vitepress)

### Preview

You can scan the [QR code](https://nikoni.top/images/vui-vc-qrcode.png) to access the examples on mobile/tablet device:

<img src="https://nikoni.top/images/vui-vc-qrcode.png" alt="VUI Examples" width="222" height="242"/>

### Status

- More UI components WIP based on Vue 3.
- Currently JavaScript version only, will provide TypeScript codebase in next major version.
- About project test, will provide unit/e2e test in next major version.

### Usage

Select the components you need to build your web App. Please check [VUI-POC](https://github.com/bluepower/vui-poc) for some reference.

[VUI (based on vue3)](https://github.com/bluepower/vui-vc-next) is able to run in cross-platform solutions by [Taro3](https://github.com/NervJS/taro). Please check [VUI-Taro](https://github.com/bluepower/vui-taro) for some reference.
- miniprogram (weapp/swan/alipay/tt/qq/jd) - `zh-CN` project
- quickapp - `zh-CN` project
- h5
- react native

> The mobile-first responsive-UI is also fit for desktop web.

## Project setup

### How to setup your project
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production

#### build lib
```
npm run build
```

#### build demo
```
npm run build-demo
```

## Project docs - [VUI-docs](https://nikoni.top/vui-vc-next/docs)

### Compiles docs for development
```
npm run dev-docs
```

### Compiles and minifies docs for production
```
npm run build-docs
```

### Customize configuration

About vite and vitepress, please check Configuration Reference - [vite](https://vitejs.dev/config/), [vitepress](https://vitepress.vuejs.org).

## License

<img src="https://nikoni.top/images/niko-mit.png" alt="MIT License" width="396" height="250"/>
