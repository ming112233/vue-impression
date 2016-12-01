module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'webpack.dev.config.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        indent: [2, 4, { SwitchCase: 1}],
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        'import/no-dynamic-require': 0,
        'global-require': 0,
        'arrow-parens': ["error", "as-needed"],
        'keyword-spacing': ["error", { "overrides": {"switch": { "after": false }, "if": { "after": false }} }],
        'no-unused-expressions': ["error", { "allowShortCircuit": true }],
        'no-param-reassign': ["error", { "props": false }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
