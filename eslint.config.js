import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import imp from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import node from 'eslint-plugin-node'
import promise from 'eslint-plugin-promise'
import security from 'eslint-plugin-security'
import stylelint from 'eslint-config-stylelint'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import vitest from 'eslint-plugin-vitest'

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettierConfig,
    {
        ignores: ['node_modules', 'dist', '.vscode', '.husky', 'coverage', 'analyse.html']
    },
    {
        files: ['src/**/*.test.{ts,tsx}'],
        rules: {
            'vitest/no-disabled-tests': 'warn',
            'vitest/no-focused-tests': 'error',
            'vitest/no-identical-title': 'error',
            'vitest/prefer-to-have-length': 'warn',
            'vitest/valid-expect': 'error'
        }
    },
    {
        files: ['src/**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: ['.tsx', '.jsx']
            },
            parser: tseslint.parser,
            globals: {
                ...vitest.environments.env.globals,
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            }
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: imp,
            'jsx-a11y': jsxA11y,
            node,
            promise,
            security,
            stylelint,
            'unused-imports': unusedImports,
            vitest,
            prettier
        },
        rules: {
            ...vitest.configs.recommended.rules,
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
            'security/detect-object-injection': 'off'
        },
        settings: {
            react: {
                version: 'detect'
            },
            vitest: {
                typecheck: true
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