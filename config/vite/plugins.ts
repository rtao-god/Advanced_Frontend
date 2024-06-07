import reactRefresh from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import MillionLint from '@million/lint'
import million from 'million/compiler'
import sassDts from 'vite-plugin-sass-dts'
import path from 'path'

export const plugins = [
    reactRefresh(),
    sassDts({
        enabledMode: ['development'],
        global: {
            generate: true,
            outputFilePath: path.resolve(__dirname, '../../src/app/styles/types/style.d.ts')
        },
        sourceDir: path.resolve(__dirname, '../../src'),
        outputDir: path.resolve(__dirname, '../../src/app/styles/types')
    }),
    visualizer({
        template: 'treemap',
        open: false,
        gzipSize: true,
        brotliSize: true,
        filename: 'analyse.html'
    }),
    million.vite({
        auto: true
    }),
    MillionLint.vite({})
]
