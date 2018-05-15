import baseConfig from './rollup.config.base.js'
import serve from 'rollup-plugin-serve'
import { name } from '../package.json'

export default {
  ...baseConfig,
  output: [
    {
      file: `dist/${name}.js`,
      format: 'umd',
      name,
      sourcemap: true
    },
    {
      file: `dist/${name}.cjs.js`,
      format: 'cjs',
      name,
      sourcemap: true
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: 9090,
      contentBase: ['']
    })
  ]
}
