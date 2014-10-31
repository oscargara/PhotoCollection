define(
    [
        'lib/Uploaders/Server'
    ],
    function(Server) {
        describe("Server Photo Uploader", function() {
            it("should upload a form with images and return the url", function() {

                var url = 'http://localhost.com/1.jpg';
                var data = {error: false, id: 1234 , url: url};

                var formData = 'some data here';
                var NavigatorFormData = function(){
                    return formData;
                };

                var $form = ['form'];

                var ajaxSettings;

                spyOn($, 'ajax').and.callFake(function(settings) {
                    ajaxSettings = settings;
                });

                var server = new Server(NavigatorFormData);

                var dataResult;
                var that = {callback:function(data){dataResult = data;}};

                server.upload($form, that.callback, that);

                ajaxSettings.success([data]);

                expect(dataResult[0].url).toEqual(url);

            })
        });
    });