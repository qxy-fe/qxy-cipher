import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  externals: ['crypto-js'],
  rollup: {
    emitCJS: true,
    esbuild: {
      charset: 'utf8',
    },
  },
})
