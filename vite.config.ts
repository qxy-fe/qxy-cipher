import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      reporter: [`lcov`],
    },
  },

  resolve: {
    alias: {
      '@qxy/cipher': fileURLToPath(new URL(`./src/index.ts`, import.meta.url)),
    },
  },
})
