import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      reporter: ['lcov', 'text', 'json'],
    },
  },

  resolve: {
    alias: {
      '@qxy/cipher': fileURLToPath(new URL('./src/index.ts', import.meta.url)),
    },
  },
})
