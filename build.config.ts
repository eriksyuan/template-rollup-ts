import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const input = './src/index.ts'

const configs = defineConfig([
  {
    input,
    output: [
      {
        file: './dist/index.cjs.js',
        format: 'cjs',
      },
      {
        file: './dist/index.esm.js',
        format: 'es',
      },
    ],
    plugins: [esbuild()],
  },
  {
    input,
    output: {
      file: './dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
])

export default configs
