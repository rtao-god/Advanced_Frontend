import { defineConfig } from 'vite'
import { plugins, css, alias, test } from './config/vite'

export default defineConfig({
    plugins,
    css,
    test,
    resolve: alias
})
