import serve from 'rollup-plugin-serve'
import baseConfig from './rollup.config.base'
import { name } from '../package.json'

export default {
  input: baseConfig.input,
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
