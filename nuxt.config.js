require('dotenv').config();

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
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    env: {
        API_URL: process.env.API_URL || 'https://constructor.deetoo.co.uk/graphql',
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
    },
    css: ['~/assets/css/tailwind.css'],
    plugins: [
        { src: '~plugins/webfontloader.js', ssr: false },
        { src: '~/plugins/vue-smooth-scroll', ssr: false },
        { src: '~/plugins/axios', ssr: false },
        { src: '~/plugins/mixins', ssr: false },
    ],
    modules: [
        '@nuxtjs/toast',
        '@nuxtjs/dotenv',
        '@nuxtjs/axios',
        [
            'qonfucius-nuxt-fontawesome',
            {
                componentName: 'fa-icon',
                packs: [
                    {
                        package: '@fortawesome/free-solid-svg-icons',
                        icons: ['faHome', 'faPhone'],
                    },
                ],
                includeCss: true,
            },
        ],
    ],
    toast: {
        position: 'top-center',
    },
    render: {
        ssr: false,
    },
    mode: 'spa',
};
