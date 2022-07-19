import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [vue()],
    build: {
      rollupOptions: {
        external: ['element-ui', 'vue']
      },
      lib: {
        entry: path.resolve(__dirname, './src/index.js'),
        name: 'wUi',
        fileName: 'w-element-ui',
        formats: ['es', 'cjs', 'umd', 'iife']
      }
    }
  }
})