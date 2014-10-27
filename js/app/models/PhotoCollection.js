define(['backbone', 'models/Photo'], function(Backbone, Photo) {

    var PhotoCollection = Backbone.Collection.extend({
        model: Photo,
        initialize: function(options) {
            this.on('add', this.storeList, this);
            this.on('change', this.storeList, this);
            this.on('destroy', this.storeList, this);
        },
        sync: function(method, model, options) {
            if(method == 'read') {
                this.fetchPhotos();
            }
            return false;
        },
        storeList : function(a){
            localStorage.setItem("photoCollection", JSON.stringify(this.toJSON()));
        },

        fetchPhotos : function(){
            var photoList = JSON.parse(localStorage.getItem("photoCollection"));
            if (!photoList) return;
            for (var i = 0; i<photoList.length; ++i){
                var photoData = photoList[i];
                this.create(photoData);
            }
        },

        changePhotoToPosition : function(photoId, toPosition){
            var photo = this.get(photoId);
            var position =  this.getPhotoPositionById(photoId);

            this.models.splice(position, 1);
            this.models.splice(toPosition, 0, photo);

            this.storeList();
        },

        getPhotoPositionById: function(photoId){
            var position = null;
            for(var i=0; i<this.models.length;++i){
                if(this.models[i].id == photoId){
                    position = i;
                    break;
                }
            }
            return position;
        }
    });

    return PhotoCollection;

});