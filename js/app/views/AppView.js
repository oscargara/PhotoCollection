define([
    'jquery',
    'jquery-ui',
    'backbone',
    'views/PhotoCollectionView',
    'views/UploaderView',
    'models/PhotoCollection',
    'lib/Uploaders/Factory'
], function ($, jqueryUi, Backbone, PhotoCollectionView, UploaderView, PhotoCollection, UploaderFactory) {

    var AppView = Backbone.View.extend({

        el: $("#main-container"),

        initialize: function() {

            var photoCollection = new PhotoCollection();

            var view = new PhotoCollectionView({model:photoCollection});

            $(this.el).append(view.render().el);

            photoCollection.fetch();

            var uploader = (new UploaderFactory()).build('Server');

            var uploaderView = new UploaderView({photoCollection: photoCollection, uploader: uploader});

            $(this.el).append(uploaderView.render().el);

            $(function() {
                $( "#sortable" ).sortable();
                $( "#sortable" ).disableSelection();
            });

        }
    });

    return AppView;
});
