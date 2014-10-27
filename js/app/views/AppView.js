define([
    'jquery',
    'jquery-ui',
    'backbone',
    'views/PhotoCollectionView',
    'views/UploaderView',
    'models/PhotoCollection',
    'lib/Uploaders/LocalStorage'
], function ($, jqueryUi, Backbone, PhotoCollectionView, UploaderView, PhotoCollection, Uploader) {

    var AppView = Backbone.View.extend({

        el: $("#main-container"),

        initialize: function() {

            var photoCollection = new PhotoCollection();

            var view = new PhotoCollectionView({model:photoCollection});

            $(this.el).append(view.render().el);

            photoCollection.fetch();

            var uploaderView = new UploaderView({photoCollection: photoCollection, uploader: new Uploader()});

            $(this.el).append(uploaderView.render().el);

            $(function() {
                $( "#sortable" ).sortable();
                $( "#sortable" ).disableSelection();
            });

        }
    });

    return AppView;
});
