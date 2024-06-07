/// <reference types="vitest" />
import { configDefaults } from 'vitest/config'

export const test = {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/shared/config/test/setupTests.ts',
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    coverage: {
        reporter: ['text', 'lcov'],
        exclude: [...(configDefaults.coverage.exclude ?? ''), 'src/shared/icons']
    }
}
