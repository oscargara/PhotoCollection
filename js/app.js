
require.config({
    baseUrl: './js/app',
    paths: {
        'jquery': '../vendor/jquery/dist/jquery.min',
        'jquery-ui': '../vendor/jquery-ui/jquery-ui.min',
        'underscore': '../vendor/underscore/underscore-min',
        'backbone': '../vendor/backbone/backbone'
    }
});

require(['main']);