define([
    'jquery',
    'backbone',
    'lib/TemplateLoader'
], function ($, Backbone, TemplateLoader) {

    var UploaderView = Backbone.View.extend({

        uploader: null,
        template: 'photo-uploader',
        formId : 'photo_uploader_'+Math.round(Math.random()*1000),

        photoCollection: null,

        events: {
            "click button#submit-form": "submitForm"
        },
        initialize: function(options) {
            this.photoCollection = options['photoCollection']
            this.uploader = options['uploader']
        },

        submitForm: function(){
            var $form = $('#' + this.formId);
            if(this.uploader){
                this.uploader.upload($form, this.addPhotoFromStorage, this)
            }
            return false;
        },

        addPhotoFromStorage:function(data){
            this.addPhotosToCollection(data);
            var $form = $('#' + this.formId);
            $form[0].reset();
        },

        addPhotosToCollection : function(data){
            for(var i=0;i<data.length;++i){
                var photoData = data[i];
                if (!photoData.error) {
                    this.photoCollection.create({'id':photoData.id, 'url': photoData.url});
                }
            }
        },

        render: function(){
            var templateLoader = new TemplateLoader("./js/app/templates/");
            if (templateLoader) {
                templateLoader.load(this.template,
                    function(template){
                        var taskTemplate = _.template(template);
                        this.$el.html(taskTemplate({photo_uploader_id: this.formId}));
                    },
                    this
                );
            }
            return this;

        }

    });

    return UploaderView;
});