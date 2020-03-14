require('dotenv').config();

const routerBase =
    process.env.DEPLOY_ENV === 'GH_PAGES'
        ? {
              router: {
                  base: '/green-design/',
              },
          }
        : {};

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'BDMLR',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'Website page for BDMLR',
            },
            { name: 'robots', content: 'noindex' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    env: {
        S3_URL: process.env.S3_URL || 'http://localhost:1337',
        ASSET_URL: process.env.ASSET_URL || 'http://localhost:1337',
        API_URL: process.env.API_URL || 'http://localhost:1337/graphql',
        API_TOKEN: process.env.API_TOKEN || 'YYRThH7Eh0bHTWrYu5CuPAD1S2QCCwnSD6K3RCWq',
        NODE_ENV: process.env.NODE_ENV || 'development',
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        babel: {
            plugins: ['@babel/plugin-proposal-nullish-coalescing-operator'],
        },
        /* optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        minChunks: 1,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                },
            },
        }, */
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            config.resolve.alias.vue = 'vue/dist/vue.common';

            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
        postcss: {
            plugins: [
                require('tailwindcss')('./tailwind.js'),
                require('postcss-preset-env')({
                    importFrom: './assets/css/components/variables.css',
                    features: {
                        'nesting-rules': true,
                        'custom-media-queries': true,
                    },
                    autoprefixer: {
                        cascade: false,
                        grid: true,
                    },
                }),
                require('cssnano')({
                    preset: 'default',
                    discardComments: { removeAll: true },
                    zindex: false,
                    autoprefixer: false,
                }),
            ],
        },
    },
    css: ['~/assets/css/tailwind.css'],
    plugins: [
        { src: '~plugins/webfontloader.js', ssr: false },
        { src: '~/plugins/vue-smooth-scroll', ssr: false },
        { src: '~/plugins/vue-isotope', ssr: false },
        { src: '~/plugins/vue-imagesLoaded', ssr: false },
        { src: '~/plugins/axios', ssr: false },
        { src: '~/plugins/mixins', ssr: false },
    ],
    modules: [
        '@nuxtjs/apollo',
        '@nuxtjs/toast',
        '@nuxtjs/dotenv',
        '@nuxtjs/axios',
        '@nuxtjs/robots',
        [
            'qonfucius-nuxt-fontawesome',
            {
                componentName: 'fa-icon',
                packs: [
                    {
                        package: '@fortawesome/free-solid-svg-icons',
                        icons: ['faHome', 'faPhone'],
                    },
                    {
                        package: '@fortawesome/free-brands-svg-icons',
                        icons: [
                            'faFacebookSquare',
                            'faYoutubeSquare',
                            'faInstagram',
                            'faLinkedin',
                            'faBehanceSquare',
                            'faTwitterSquare',
                        ],
                    },
                ],
                includeCss: true,
            },
        ],
    ],
    ...routerBase,
    apollo: {
        defaultOptions: {
            $query: {
                loadingKey: 'loading',
                fetchPolicy: 'cache-first',
            },
        },
        clientConfigs: {
            default: '~/apollo/config.js',
        },
    },
    robots: {
        UserAgent: '*',
        Disallow: '/',
    },
    toast: {
        position: 'top-center',
    },
    render: {
        ssr: false,
    },
    mode: 'spa',
};
