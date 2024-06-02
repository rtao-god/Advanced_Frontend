import { defineConfig } from 'vite'
import { plugins, css, alias } from './config/vite'

export default defineConfig({
    plugins,
    css,
    resolve: alias
})
