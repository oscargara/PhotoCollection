define(
    [
        'lib/Uploaders/LocalStorage'
    ],
    function(LocalStorage) {
        describe("LocalStorage Photo Uploader", function() {
            it("should upload a form with images and return the url", function() {

                var url = 'data:image/jpeg;base64, LzlqLzRBQ';
                var reader = {readAsDataURL:function(){}};
                spyOn(reader, "readAsDataURL");
                var NavigatorFileReader = function(){
                    return reader;
                };

                var input = {files:['file1']};
                var $form = {find:function(){}};
                spyOn($form, "find").and.returnValue([input]);

                var localStorage = new LocalStorage(NavigatorFileReader);

                var dataResult;
                var that = {callback:function(data){dataResult = data;}};

                localStorage.upload($form, that.callback, that);

                reader.onload({target:{result:url}});

                expect(reader.readAsDataURL).toHaveBeenCalled();
                expect(dataResult[0].url).toEqual(url);

            })
        });
    });