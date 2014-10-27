define([
    'jquery',
    'backbone',
    'lib/TemplateLoader'
], function ($, Backbone, TemplateLoader) {

    var PhotoView = Backbone.View.extend({
        tagName: "li",
        template: 'photo-template',
        events: {
            "click button.delete-photo": "deletePhoto",
            "click div.description": "editDescription",
            "blur input.description": "saveDescription"
        },

        initialize: function(options) {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        sync: function(method, model, options) {
            console.log('COLLECTION', method , model, options);
        },
        render : function(){

            var templateLoader = new TemplateLoader("./js/app/templates/");
            if (templateLoader) {
                templateLoader.load(this.template,
                    function(template){
                        var taskTemplate = _.template(template);
                        this.$el.html(taskTemplate(this.model.toJSON()));
                        this.$el.attr('data-id', this.model.get('id'));
                    },
                    this
                );
            }
            return this;
        },
        deletePhoto: function(e){
            this.model.destroy();
        },

        editDescription: function(){
            this.$el.find('div.description').hide();
            this.$el.find('input.description').show();
            this.$el.find('input.description').focus();
        },
        saveDescription : function(){
            var inputDescription = this.$el.find('input.description');
            var divDescription = this.$el.find('div.description');
            var newDescription = inputDescription.val();
            this.model.set({description: newDescription});
            inputDescription.hide();
            divDescription.show();
        }

    });

    return PhotoView;
});
