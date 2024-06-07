import path from 'path'

export const alias = {
    alias: {
        '@': path.resolve(__dirname, '../../src'),
        '\\.module\\.(sass|scss)$': 'identity-obj-proxy'
    }
}
