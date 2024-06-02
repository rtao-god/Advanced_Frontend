import tseslint from 'typescript-eslint'
import eslint from '@eslint/js'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import eslintImport from 'eslint-plugin-import'
import eslintJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintNode from 'eslint-plugin-node'
import eslintPromise from 'eslint-plugin-promise'
import eslintSecurity from 'eslint-plugin-security'
import eslintStylelint from 'eslint-plugin-stylelint'
import eslintUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import eslintJest from 'eslint-plugin-jest'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettierConfig,
    {
        ignores: ['node_modules', 'dist', '.vscode', '.husky', 'coverage', 'analyse.html']
    },
    {
        files: ['src/**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: ['.tsx,.jsx']
            },
            parser: tseslint.parser,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            }
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: eslintReact,
            'react-hooks': eslintReactHooks,
            'react-refresh': eslintReactRefresh,
            prettier: prettierPlugin,
            import: eslintImport,
            'jsx-a11y': eslintJsxA11y,
            node: eslintNode,
            promise: eslintPromise,
            security: eslintSecurity,
            stylelint: eslintStylelint,
            'unused-imports': eslintUnusedImports,
            jest: eslintJest
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            semi: ['error', 'never'],
            quotes: ['error', 'single'],
            'prettier/prettier': 'error',
            'prefer-const': 'error',
            'unused-imports/no-unused-imports': 'error',
            'import/no-unresolved': 'error',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-vars': [
                'warn',
                { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
            ],
            'react/prop-types': 'off',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-vars': 'error',
            'jsx-a11y/anchor-is-valid': 'off',
            'node/no-unsupported-features/es-syntax': 'off',
            'promise/always-return': 'error',
            'promise/no-return-wrap': 'error',
            'promise/param-names': 'error',
            'security/detect-object-injection': 'off',
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/prefer-to-have-length': 'warn',
            'jest/valid-expect': 'error'
        },
        settings: {
            react: {
                version: 'detect'
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
                typescript: true,
                node: true
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                },
                typescript: {
                    alwaysTryTypes: true
                }
            }
        }
    }
)
