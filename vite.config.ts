import reactRefresh from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import '@/app/styles/include.sass'\n`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})