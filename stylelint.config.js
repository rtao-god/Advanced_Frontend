/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  overrides: [
    {
      files: ['src/**/*.sass'],
      customSyntax: 'postcss-sass',
      rules: {
        'no-empty-source': null,
        'at-rule-no-unknown': [true, {
          ignoreAtRules: ['media', 'supports', 'document', 'extend', 'ignores']
        }]
      }
    },
    {
      files: ['src/**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'no-empty-source': null,
        'at-rule-no-unknown': [true, {
          ignoreAtRules: ['media', 'supports', 'document', 'extend', 'ignores']
        }]
      }
    },
  ],
  rules: {
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'indentation': 2,
    'max-empty-lines': 2,
    'no-extra-semicolons': true,
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules'
    ],
    'order/properties-order': [
      {
        groupName: 'positioning',
        emptyLineBefore: 'always',
        properties: [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index'
        ]
      },
      {
        groupName: 'box-model',
        emptyLineBefore: 'always',
        properties: [
          'display',
          'flex',
          'flex-direction',
          'justify-content',
          'align-items',
          'flex-wrap',
          'width',
          'height',
          'margin',
          'padding',
          'border',
          'border-radius',
          'box-shadow',
          'box-sizing'
        ]
      },
      {
        groupName: 'typography',
        emptyLineBefore: 'always',
        properties: [
          'font-family',
          'font-size',
          'font-weight',
          'font-style',
          'line-height',
          'letter-spacing',
          'text-align',
          'text-transform',
          'text-decoration',
          'color'
        ]
      },
      {
        groupName: 'visual',
        emptyLineBefore: 'always',
        properties: [
          'background',
          'background-color',
          'background-image',
          'background-size',
          'background-position',
          'background-repeat',
          'opacity'
        ]
      },
      {
        groupName: 'animation',
        emptyLineBefore: 'always',
        properties: [
          'transition',
          'transition-duration',
          'transition-timing-function',
          'animation',
          'animation-name',
          'animation-duration',
          'animation-timing-function',
          'animation-delay'
        ]
      },
      {
        groupName: 'misc',
        emptyLineBefore: 'always',
        properties: [
          'cursor',
          'pointer-events',
          'visibility',
          'overflow',
          'overflow-x',
          'overflow-y'
        ]
      }
    ],
    'scss/at-extend-no-missing-placeholder': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-class-pattern': '^[a-z0-9_]+$', // snake_case 
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-parentheses-space-inside': 'never',
    'max-line-length': 80,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-space-before': 'never',
    'selector-list-comma-space-after': 'always',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'string-quotes': 'double',
    'unicode-bom': 'never',
    'unit-case': 'lower',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never'
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
