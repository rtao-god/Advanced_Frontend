module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json"
  },
  settings: {
    react: {
      version: 'detect',
      pragma: "React",
      runtime: "automatic"
    },
    "import/resolver": {
      "typescript": {}
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off', 
  }
};
