import reactRefresh from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export const plugins = [
    reactRefresh(),
    svgr({
        include: '**/*.svg',
        svgrOptions: {
            icon: true
        }
    })
]
