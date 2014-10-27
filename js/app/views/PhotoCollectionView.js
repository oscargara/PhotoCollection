define([
    'jquery',
    'backbone',
    'views/PhotoView'
], function ($, Backbone, PhotoView) {

    var PhotoCollectionView = Backbone.View.extend({
        tagName: "ul",
        initialize: function(options) {
            for(var i=0;i<this.model.length; ++i){
                var photo = this.model.at(i);
                this.addOneTask(photo);
            }
            this.listenTo(this.model, 'add', this.addOneTask);
            var me = this;
            this.$el.sortable({
                    update : function( event, ui ){
                        var $items = me.$el.find('li');

                        var endPosition = null;
                        $items.each(function(i, item){
                            var id = $(item).attr('data-id');
                            if (id == ui.item.attr('data-id')){
                                endPosition = i;
                                return;
                            }
                        });
                        me.model.changePhotoToPosition(ui.item.attr('data-id'), endPosition);
                    }
                }
            );
        },
        addOneTask : function(photo){
            var view = new PhotoView({model: photo});
            this.$el.append(view.render().$el);
        }

    });

    return PhotoCollectionView;
});
