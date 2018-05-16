import filesize from 'rollup-plugin-filesize'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

import baseConfig from './rollup.config.base'
import { name, version, author } from '../package.json'

const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`

export default [
  {
    input: baseConfig.input,
    output: [
      {
        file: `dist/${name}.js`,
        format: 'umd',
        name,
        banner,
        sourcemap: true
      },
      // cjs and esm version
      {
        file: `dist/${name}.cjs.js`,
        format: 'cjs',
        banner
      },
      // cjs and esm version
      {
        file: `dist/${name}.esm.js`,
        format: 'es',
        banner
      }
    ],
    plugins: [...baseConfig.plugins, filesize()]
  },
  // .min.js
  {
    input: baseConfig.input,
    output: [
      // umd with compress version
      {
        file: `dist/${name}.min.js`,
        format: 'umd',
        name,
        banner
      }
    ],
    plugins: [
      ...baseConfig.plugins,
      uglify(
        {
          compress: {
            drop_console: true
          }
        },
        minify
      ),
      filesize()
    ]
  }
]
