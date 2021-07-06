const mix = require("laravel-mix");

var app_paths = {
    backend: {
        main: "public/assets/backend/",
        css: "public/assets/backend/css/",
        js: "public/assets/backend/js/",
    },
};

//Backend
mix.styles(
    [
        "node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css",
        "node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
        "node_modules/admin-lte/dist/css/adminlte.min.css",
    ],
    app_paths.backend.css + "vendor.css"
).sourceMaps();

mix.styles(
    ["resources/css/backend/app.css"],
    app_paths.backend.css + "app.css"
).sourceMaps();

mix.copy(
    "node_modules/admin-lte/plugins/fontawesome-free/webfonts",
    app_paths.backend.main + "webfonts/"
);

mix.js(["resources/js/backend/app.js"], app_paths.backend.js + "app.js");
mix.js([
    "node_modules/admin-lte/plugins/jquery/jquery.min.js",
    "node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js",
    "node_modules/admin-lte/dist/js/adminlte.min.js",
], app_paths.backend.js + "vendor.js");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js("resources/js/app.js", "public/js").postCss(
//     "resources/css/app.css",
//     "public/css",
//     [
//         //
//     ]
// );
// mix.scripts([
//     //'//node_modules/bootstrap/dist/js/bootstrap.js',
//     //'node_modules/selectize/dist/js/selectize.js'
// ],  'public/js/app.js').sourceMaps();

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

/*
|--------------------------------------------------------------------------
| Webpack Config
|--------------------------------------------------------------------------


/*
 |--------------------------------------------------------------------------
 | BrowserSync Settings
 |--------------------------------------------------------------------------
 */
// mix.browserSync({
//     proxy: process.env.MIX_BS_URL,
//     port: process.env.MIX_BS_PORT,
//     xip: process.env.MIX_BS_XIP,
// });

/*
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 | FRONTEND COMPILATION
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 */

/*
 |--------------------------------------------------------------------------
 | Mix Frontend Styles
 |--------------------------------------------------------------------------
 */
// mix.styles(["resources/css/frontend/main.css"], "public/css/frontend/main.css");

/*
 |--------------------------------------------------------------------------
 | Mix Frontend Javascript
 |--------------------------------------------------------------------------
 */
// mix.js(["resources/js/frontend/app.js"], "public/js/frontend/app.js");

/*
 |--------------------------------------------------------------------------
 | Mix Extract Frontend Vendor Files
 |--------------------------------------------------------------------------
 */
// mix.extract(
//     [
//         // "jquery",
//         "adminlte",
//         // "bootstrap",
//         // "popper.js",
//         // "axios",
//         // "sweetalert2",
//         // "lodash",
//         // "bootstrap-select",
//         // "jasny-bootstrap",
//         // "moment",
//         // "nouislider",
//         // "bootstrap-vue",
//         // "vue",
//         // "vuex",
//     ],
//     "public/js/backend/vendor.js"
// ).sourceMaps();

/*
 |--------------------------------------------------------------------------
 | Mix Frontend Sass
 |--------------------------------------------------------------------------
 */
// mix.sass("resources/sass/frontend/app.scss", "public/css/frontend/app.css");

/*
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 | BACKEND COMPILATION
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 */

/*
 |--------------------------------------------------------------------------
 | Mix backend Styles
 |--------------------------------------------------------------------------
 */
// mix.styles(["resources/css/backend/main.css"], "public/css/backend/main.css");
// mix
// .styles(["node_modules/admin-lte/dist/css/adminlte.css"], "public/css/backend/vendor.css")
// .sourceMaps()
// ;
/*
 |--------------------------------------------------------------------------
 | Mix backend Javascript
 |--------------------------------------------------------------------------
 */
// mix.js(["resources/js/backend/app.js"], "public/js/backend/app.js");

/*
 |--------------------------------------------------------------------------
 | Mix Extract Vendor Files
 |--------------------------------------------------------------------------
 */
// mix.extract(
//     [
//         // "adminlte",
//         "jquery",
//         // "axios",
//         // "bootstrap",
//         // "bootstrap-select",
//         // "bootstrap-vue",
//         // "datatables.net-bs4",
//         // "datatables.net-autofill-bs4",
//         // "datatables.net-buttons-bs4",
//         // "datatables.net-colreorder-bs4",
//         // "datatables.net-fixedcolumns-bs4",
//         // "datatables.net-fixedheader-bs4",
//         // "datatables.net-keytable-bs4",
//         // "datatables.net-responsive-bs4",
//         // "datatables.net-rowgroup-bs4",
//         // "datatables.net-rowreorder-bs4",
//         // "datatables.net-scroller-bs4",
//         // "datatables.net-select-bs4",
//         // "jasny-bootstrap",
//         // "json-formatter-js",
//         // "jszip",
//         // "lodash",
//         // "moment",
//         // "nouislider",
//         // "pdfmake",
//         // "popper.js",
//         // "sweetalert2",
//         // "vue",
//         // "vuex",
//     ],
//     "public/js/backend/vendor.js"
// ).sourceMaps();

/*
 |--------------------------------------------------------------------------
 | Mix backend Sass
 |--------------------------------------------------------------------------
 */
// mix.sass("resources/sass/backend/app.scss", "public/css/backend/app.css");

/*
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 | GLOBAL COMPILATION
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 */
/*
 |--------------------------------------------------------------------------
 | Mix Copy Directories
 |--------------------------------------------------------------------------
 */
// mix.copy("resources/img", "public/img/");
// mix.copy("resources/fonts", "public/fonts/");

/*
 |--------------------------------------------------------------------------
 | Mix Version in Production
 |--------------------------------------------------------------------------
 */
// if (mix.inProduction()) {
//     mix.version().options({
//         // Optimize JS minification process
//         terser: {
//             cache: true,
//             parallel: true,
//             sourceMap: true,
//         },
//     });
// } else {
//     // Uses inline source-maps on development
//     mix.webpackConfig({
//         devtool: "inline-source-map",
//     });
// }
// The issue I am running into is my mix-manifest.json file is missing information and further more my JS does not work on the frontend.

// From what I have read in the docs, this should be doable but I seem to have issues with it.

// mix-manifest.json

// {
//     "/js/backend/app.js": "/js/backend/app.js",
//     "/js/backend/manifest.js": "/js/backend/manifest.js",
//     "/js/backend/vendor.js": "/js/backend/vendor.js",
//     "/js/frontend/app.js": "/js/frontend/app.js",
//     "/css/frontend/app.css": "/css/frontend/app.css",
//     "/css/backend/app.css": "/css/backend/app.css",
//     "/js/frontend/vendor.js": "/js/frontend/vendor.js",
//     "/css/frontend/main.css": "/css/frontend/main.css",
//     "/css/backend/main.css": "/css/backend/main.css"
// }
