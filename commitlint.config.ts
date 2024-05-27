import { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // Introducing new features
                'fix', // Bug fixes
                'chore', // Routine tasks and maintenance
                'docs', // Documentation changes
                'style', // Code style changes (formatting, missing semi-colons, etc.)
                'refactor', // Code refactoring without changing functionality
                'perf', // Performance improvements
                'test' // Adding or updating tests
            ]
        ],
        'subject-case': [2, 'never', ['sentence-case']],
        'header-max-length': [2, 'always', 100],
        'subject-empty': [2, 'never'],
        'type-empty': [2, 'never']
    }
}

export default Configuration
