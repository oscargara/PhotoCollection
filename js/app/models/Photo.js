define(['backbone'], function(Backbone) {

   return Backbone.Model.extend({

        defaults: function() {
            return {
                id : null,
                url: './photos/placeholder.png',
                description: 'Description'
            };
        },
       sync: function(method, model, options) {
           return false;
       }
    });

});