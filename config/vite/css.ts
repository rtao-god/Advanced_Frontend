export const css = {
    preprocessorOptions: {
        sass: {
            additionalData: `@import @/app/styles/include.sass\n`
        },
        scss: {
            additionalData: `@import '@/app/styles/include.sass';\n`
        }
    },
    modules: {
        scopeBehaviour: 'local' as const
    }
}
