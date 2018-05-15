const alias = require('rollup-plugin-alias')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const eslint = require('rollup-plugin-eslint')

module.exports = {
  input: 'src/main.js',
  plugins: [
    alias({
      resolve: ['.js']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    }),
    resolve(),
    commonjs({
      // rollup-plugin-node-resolve 插件可以解决 ES6模块的查找导入，
      // 但是npm中的大多数包都是以CommonJS模块的形式出现的，所以需要使用这个插件将CommonJS模块转换为 ES2015 供 Rollup 处理
      include: 'node_modules/**'
    }),
    eslint({
      include: ['src/**/*.js']
    }),
    babel({
      runtimeHelpers: true, // 配置runtime，不设置会报错
      exclude: 'node_modules/**' // 排除引入的库
    })
  ]
}
