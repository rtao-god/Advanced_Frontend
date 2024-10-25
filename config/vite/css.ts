export const css = {
    preprocessorOptions: {
        scss: {
            additionalData: `@import '@/app/styles/includeMixinsAndVariables';`
        }
    },
    modules: {
        scopeBehaviour: 'local',
        generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
}
