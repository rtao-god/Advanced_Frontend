import path from 'path'

export const alias = {
    alias: {
        '@': path.resolve(__dirname, '../../src'),
        // '\\.module\\.(scss)$': 'identity-obj-proxy',
        '\\.module\\.scss$': '/__mocks__/styleMock.js'
    }
}
