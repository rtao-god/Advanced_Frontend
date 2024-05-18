import { Linter } from 'eslint';

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:node/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'unused-imports', 'import'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
      pragma: 'React',
      runtime: 'automatic',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/no-default-export': 'off',
  },
};

export default config;
