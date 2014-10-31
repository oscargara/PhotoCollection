define(['jquery'], function($) {
    var Server = function(NavigatorFormData){

        var upload = function($form, callback, that){
            var formData = new NavigatorFormData($form[0]);

            $.ajax({
                url: './upload.php',
                type: 'POST',
                xhr: function() {
                    var myXhr = $.ajaxSettings.xhr();
                    return myXhr;
                },
                success: function (data) {
                    callback.call(that, data);
                },
                error: function(e){
                    console.log('error', e);
                },
                data: formData,
                cache: false,
                contentType: false,
                processData: false
            });
        };

        this.upload = upload;
    };

    return Server;
});

