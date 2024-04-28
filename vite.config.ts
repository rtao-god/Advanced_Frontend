import { defineConfig } from 'vite'
import { plugin, css, alias } from './src/config/vite'

export default defineConfig({
  plugins: plugin,
  css: css,
  resolve: alias,
})
