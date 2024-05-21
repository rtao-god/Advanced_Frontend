export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  customSyntax: 'postcss-sass',
  rules: {
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'declaration-block-trailing-semicolon': 'always',
    'indentation': 2,
    'max-empty-lines': 2,
    'no-extra-semicolons': true,
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'display',
      'justify-content',
      'align-items',
    ],
    'plugin/declaration-block-no-ignored-properties': true,
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[_a-z]+[a-zA-Z0-9]+$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-pattern': '^[_a-z]+[a-zA-Z0-9]+$',
    'scss/dollar-variable-pattern': '^[_a-z]+[a-zA-Z0-9]+$',
    'scss/percent-placeholder-pattern': '^[_a-z]+[a-zA-Z0-9]+$',
    'scss/selector-no-redundant-nesting-selector': true
  },
  ignoreFiles: [
    'node_modules/**/*',
    'dist/**/*',
    '.vscode/**/*',
    '.husky/**/*',
    'coverage/**/*',
    'analyse.html'
  ]
};
