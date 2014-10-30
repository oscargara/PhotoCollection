define(['jquery'], function($) {
    var LocalStorage = function(){

        var upload = function($form, callback, that){

            var input = $form.find('input[type="file"]')[0];

            if (input.files && input.files.length>0) {
                for(var i=0; i<input.files.length; ++i){
                    var reader = new FileReader();
                    var me = this;
                    reader.onload = function (e) {
                        var data = {error: false, id: Math.round(Math.random()*10000000) , url: e.target.result};
                        callback.call(that, [data]);
                    };
                    reader.readAsDataURL(input.files[i]);
                }
            }
        };

        this.upload = upload;
    };

    return LocalStorage;
});

