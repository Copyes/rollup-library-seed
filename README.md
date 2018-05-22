## Rollup-Library-Seed [![Build Status](https://travis-ci.com/Copyes/rollup-library-seed.svg?branch=master)](https://travis-ci.com/Copyes/rollup-library-seed)

### Introduction

A real comfortable toolkit for building library. This toolkit is based on rollup, because it will generate a tiny file.

### Features

* [x] 1、Checking the file which has been modified
* [x] 2、Formatting the code style.
* [x] 3、Formatting submission information.
* [x] 4、Generating multiple specification files.
* [x] 5、Running test and Testing your code.
* [x] 6、Generating three versions respectively js.
* [x] 7、Flow checking added.

### Usage

**git**

```js
git add xxxx
```

```js
npm run cz || yarn run cz
```

**rollup**

```js
npm run dev || yarn run dev
```

```js
npm run build || yarn run build
```

**test**

```js
npm run test
```

**dist**

The main, module and unpkg configured in package.json point to CJS, ESM, UMD three versions respectively.

### Thanks

[手牵手使用 Husky & Nodejs 自定义你的 Git 钩子](https://github.com/PaicFE/blog/issues/10)

[用工具思路来规范化 git commit message](https://github.com/pigcan/blog/issues/15)

[jest 单元测试](https://facebook.github.io/jest/zh-Hans/)
