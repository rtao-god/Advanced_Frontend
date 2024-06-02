import reactRefresh from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import MillionLint from '@million/lint'
import million from 'million/compiler'

export const plugins = [
    reactRefresh(),
    visualizer({
        template: 'treemap',
        open: false,
        gzipSize: true,
        brotliSize: true,
        filename: 'analyse.html'
    }),
    million.vite({
        auto: true,
    }),
    MillionLint.vite({})
]
