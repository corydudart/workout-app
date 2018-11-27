const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            '@' : path.resolve(__dirname, 'src')
        }
    }
});
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/now-ui-dashboard.scss', 'public/css/app.css')
    .version()
    .options({processCssUrls: false});


