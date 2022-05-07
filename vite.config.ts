import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  test: {},

  resolve: {
    alias: {
      '@qxy/cipher': fileURLToPath(new URL(`./src/index.ts`, import.meta.url)),
    },
  },
})
