import { defineConfig } from 'vite'
import { plugins, css, alias } from './config'

export default defineConfig({
    plugins,
    css,
    resolve: alias
})
