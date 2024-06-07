export default {
    extends: ['stylelint-config-prettier-scss'],
    plugins: ['stylelint-order', 'stylelint-scss'],
    customSyntax: 'postcss-sass',
    rules: {
        'no-empty-source': null,
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules'],
        'order/properties-order': [
            {
                groupName: 'positioning',
                emptyLineBefore: 'always',
                properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index']
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
                properties: ['cursor', 'pointer-events', 'visibility', 'overflow', 'overflow-x', 'overflow-y']
            }
        ],
        'scss/at-extend-no-missing-placeholder': true,
        'scss/selector-no-redundant-nesting-selector': true,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-class-pattern': [
            // Main classes start with a capital letter and use snake_case, nested classes use snake_case
            '^[A-Z][a-z0-9_]*(_[a-z0-9_]+)*$|^[a-z0-9_]+$',
            {
                message:
                    'Expected class selector to be either Capitalized_snake_case for main class or snake_case for nested classes'
            }
        ]
    },
    ignoreFiles: [
        'node_modules/**/*',
        'package-lock.json/**/*',
        'public/**/*',
        'dist/**/*',
        '.vscode/**/*',
        '.husky/**/*',
        'coverage/**/*',
        'analyse.html',
        'src/**/*.scss',
        'src/**/*index.sass',
        'src/**/*include.sass'
    ]
}
