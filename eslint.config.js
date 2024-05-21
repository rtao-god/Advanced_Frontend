import js from '@eslint/js'
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImport from 'eslint-plugin-import';
import eslintJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintNode from 'eslint-plugin-node';
import eslintPromise from 'eslint-plugin-promise';
import eslintSecurity from 'eslint-plugin-security';
import eslintStylelint from 'eslint-plugin-stylelint';
import eslintUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node-modules', 'dist', '.vscode', '.husky', 'coverage', 'analyse.html'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname, 
      },
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react': eslintReact,
      'react-hooks': eslintReactHooks,
      prettier: prettierPlugin,
      // 'import': eslintImport,
      // 'jsx-a11y': eslintJsxA11y,
      // 'node': eslintNode,
      // 'promise': eslintPromise,
      // 'security': eslintSecurity,
      // 'stylelint': eslintStylelint,
      // 'unused-imports': eslintUnusedImports,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
    },
  },
)
