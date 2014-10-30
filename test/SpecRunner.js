require.config({
    baseUrl: "../js/app",
    urlArgs: 'cb=' + Math.random(),
    paths: {
        'jquery': '../vendor/jquery/dist/jquery.min',
        'jquery-ui': '../vendor/jquery-ui/jquery-ui.min',
        'underscore': '../vendor/underscore/underscore-min',
        'backbone': '../vendor/backbone/backbone',
        'spec': '../../test/spec'
    }
});

require(['jquery', 'spec/index'], function($, index) {
    var jasmineEnv = jasmine.getEnv();

    $(function() {
        require(index.specs, function() {
            jasmineEnv.execute();
        });
    });
});