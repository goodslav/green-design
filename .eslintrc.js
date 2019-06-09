const resolve = require('path').resolve;

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            vue: true,
        },
    },
    env: {
        es6: true,
        jquery: true,
        node: true,
        browser: true,
    },
    extends: ['airbnb-base', 'prettier', 'plugin:vue/essential'],
    plugins: ['vue', 'prettier', 'import'],
    settings: {
        'import/resolver': {
            webpack: {
                config: {
                    resolve: {
                        alias: {
                            '~': __dirname,
                            static: resolve(__dirname, 'static'), // use in template with <img src="~static/nuxt.png" />
                            '~static': resolve(__dirname, 'static'),
                            assets: resolve(__dirname, 'assets'), // use in template with <img src="~static/nuxt.png" />
                            '~assets': resolve(__dirname, 'assets'),
                            '~plugins': resolve(__dirname, 'plugins'),
                            '~store': resolve(__dirname, '.nuxt/store'),
                            '~router': resolve(__dirname, '.nuxt/router'),
                            '~pages': resolve(__dirname, 'pages'),
                            '~components': resolve(__dirname, 'components'),
                        },
                    },
                },
            },
        },
    },
    rules: {
        'prettier/prettier': 'error',
        indent: ['error', 4, { SwitchCase: 1 }],
        'max-len': [
            'error',
            {
                code: 160,
            },
        ],
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
        'no-plusplus': 'off',
        'no-underscore-dangle': 'off',
        'vue/require-v-for-key': 'off',
        'object-curly-newline': ['error', { consistent: true }],
        'space-before-function-paren': ['error', { anonymous: 'ignore', named: 'never', asyncArrow: 'always' }],
    },
    globals: {
        _: false,
        axios: false,
        Vue: false,
        DocumentTouch: false,
        google: false,
    },
};
