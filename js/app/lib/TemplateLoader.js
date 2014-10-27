define(['jquery'], function($) {
    var TemplateLoader = function(folder){

        var load = function(templateName, callback, that){
            $.get(folder + templateName + ".html", function(template){
                callback.call(that, template);
            });

        };

        this.load = load;
    };

    return TemplateLoader;
});
