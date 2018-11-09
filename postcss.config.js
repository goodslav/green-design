module.exports = {
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
                browsers: ['last 4 versions'],
            },
        }),
        require('cssnano')({
            preset: 'default',
            discardComments: { removeAll: true },
            zindex: false,
            autoprefixer: false,
        }),
    ],
};
