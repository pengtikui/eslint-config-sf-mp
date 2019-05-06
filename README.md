# eslint-config-sf-mp

[![npm](https://img.shields.io/npm/v/eslint-config-sf-mp.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-sf-mp)
[![GitHub issues](https://img.shields.io/github/issues/pengtikui/eslint-config-sf-mp.svg?style=flat-square)](https://github.com/pengtikui/eslint-config-sf-mp/issues)
[![NPM](https://img.shields.io/npm/l/eslint-config-sf-mp.svg?style=flat-square)](https://github.com/pengtikui/eslint-config-sf-mp/blob/master/LICENSE)

SF-iTech's ESLint configuration for WeChat Mini Program

## 安装

```bash
yarn add eslint eslint-plugin-import eslint-config-sf-mp --dev
# 或
npm install eslint eslint-plugin-import eslint-config-sf-mp --save-dev
```

## 使用

在项目根目录下创建 `.eslintrc` 文件：

```json
{
  "extends": "sf-mp"
}
```

> 注意，这套配置规则大量使用 ES6 语法，请打开微信开发者工具的 “ES6 转 ES5” 功能
