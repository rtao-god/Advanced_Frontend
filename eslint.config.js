import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintRecommended from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
  recommendedConfig: {
    'eslint:recommended': eslintRecommended,
    'plugin:@typescript-eslint/recommended': tsEslint.configs.recommended,
    'plugin:prettier/recommended': prettier
  }
});

const plugin = {
  meta: {
    name: "eslint-plugin-example",
    version: "1.2.3"
  },
  configs: {},
  rules: {},
  processors: {}
};

/* @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      'react': eslintReact,
      'react-hooks': eslintReactHooks,

      'unused-imports': 'unused-imports',
      import: 'import',
      prettier: 'prettier',
    }
  },
  { ignores: ['node-modulse', 'dist', '.vscode', '.husky', 'coverage'] },
  {
    languageOptions: {
      globals: (

      ),
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
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
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
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
  }
)
