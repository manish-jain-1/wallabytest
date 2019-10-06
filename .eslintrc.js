/* eslint-disable no-magic-numbers, strict */

module.exports = {
    parser: 'babel-eslint',
    env: {
        'react-native/react-native': true,
        jest: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        'prettier',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react-native-a11y/recommended'
    ],
    plugins: ['react', 'react-native', 'react-native-a11y', 'prettier', 'filenames'],
    settings: {
        react: {
            version: 'detect'
        },
        'import/ignore': [
            'react-native-dash',
            'react-native-android-open-settings',
            'react-native-cookies'
        ]
    },
    rules: {
        'max-len': [
            2,
            {
                code: 150,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreUrls: true
            }
        ],
        camelcase: 2,
        /* Filename rules */
        'filenames/match-regex': [2, '^([a-z0-9]+)([A-Za-z0-9]+)*(.story|.test|.config)?$'],
        /* React plugin rules */
        'react/boolean-prop-naming': 2,
        'react/button-has-type': 2,
        'react/default-props-match-prop-types': [2, { allowRequiredDefaults: false }],
        'react/destructuring-assignment': 0,
        'react/display-name': 0,
        'react/forbid-dom-props': 0,
        'react/forbid-elements': 0,
        'react/forbid-foreign-prop-types': 2,
        'react/forbid-prop-types': [
            2,
            {
                forbid: ['any', 'array', 'object'],
                checkContextTypes: true,
                checkChildContextTypes: true
            }
        ],
        'react/jsx-boolean-value': [2, 'never'],
        'react/jsx-child-element-spacing': 0,
        'react/jsx-closing-bracket-location': [2, 'line-aligned'],
        'react/jsx-closing-tag-location': 2,
        'react/jsx-curly-spacing': [2, 'never', { allowMultiline: true }],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
        'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
        'react/jsx-handler-names': [
            2,
            {
                eventHandlerPrefix: 'handle',
                eventHandlerPropPrefix: 'on'
            }
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-key': 2,
        'react/jsx-max-depth': 0,
        'react/jsx-max-props-per-line': [2, { maximum: 2, when: 'multiline' }],
        'react/jsx-no-bind': [
            2,
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowBind: false
            }
        ],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 0,
        'react/jsx-no-target-blank': 2,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-no-undef': 2,
        'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
        'react/jsx-pascal-case': [2, { allowAllCaps: true }],
        'react/jsx-sort-default-props': 0,
        'react/jsx-sort-props': 0,
        'react/jsx-space-before-closing': 0,
        'react/jsx-tag-spacing': [
            2,
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never'
            }
        ],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': [
            2,
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'ignore',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'ignore'
            }
        ],
        'react/no-access-state-in-setstate': 2,
        'react/no-array-index-key': 2,
        'react/no-children-prop': 2,
        'react/no-danger': 2,
        'react/no-danger-with-children': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': [2, { ignoreStateless: true }],
        'react/no-set-state': 0,
        'react/no-string-refs': 2,
        'react/no-redundant-should-component-update': 2,
        'react/no-render-return-value': 2,
        'react/no-this-in-sfc': 2,
        'react/no-typos': 2,
        'react/no-unknown-property': 2,
        'react/no-unused-prop-types': [2, { skipShapeProps: true }],
        'react/no-unused-state': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': [2, 'always'],
        'react/prop-types': [2, { skipUndeclared: false }],
        'react/react-in-jsx-scope': 2,
        'react/require-default-props': 2,
        'react/require-optimization': 0,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': [
            2,
            {
                order: [
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    'instance-methods',
                    'everything-else',
                    '/^on.+$/',
                    'rendering'
                ],
                groups: {
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'getInitialState',
                        'state',
                        'getChildContext',
                        'componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'componentDidUpdate',
                        'componentWillUnmount'
                    ],
                    rendering: ['/^render.+$/', 'render']
                }
            }
        ],
        'react/sort-prop-types': 0,
        'react/style-prop-object': 2,
        'react/void-dom-elements-no-children': 2,

        /* React-native plugin rules */
        'react-native/no-unused-styles': 2,

        // It is common practice to define a styles object in
        // React-Native after the class declaration.
        // Facebook's React-Native eslint config turns this off
        // https://github.com/facebook/react-native/blob/8baaad9b0fbda2b02bb1834452aa63cac7910dc5/.eslintrc#L162
        'no-use-before-define': 0,

        // It is common practice to import React-Native images
        // using `require(<image path>)`
        'global-require': 0,

        // No need to escape HTML entities in React-Native
        'react/no-unescaped-entities': 0,

        /* Prettier plugin rules */
        'prettier/prettier': 2,

        /* Custom rules for project */
        'no-console': [2, { allow: ['tron'] }],
        'react/prefer-stateless-function': 0,
        'react/forbid-component-props': 0,
        'import/no-unresolved': 2,
        semi: ['error', 'always'],
        'semi-style': ['error', 'last'],
        'no-mixed-spaces-and-tabs': 'error',
        'func-call-spacing': 'error',
        'spaced-comment': 'warn',
        'no-tabs': 'error',
        'no-color-literals': true,
        'no-trailing-spaces': ['error', { ignoreComments: true }],
        'no-multi-spaces': 'error'
    }
};
