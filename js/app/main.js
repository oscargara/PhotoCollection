require(
    [   "jquery",
        'underscore',
        'backbone',
        'views/AppView'
    ],
    function($,_,Backbone, AppView) {
        $(function() {
            var app = new AppView();
        });
    }
);

