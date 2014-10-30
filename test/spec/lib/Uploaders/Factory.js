define(
    ['lib/Uploaders/Factory',
    'lib/Uploaders/Server',
    'lib/Uploaders/LocalStorage'
    ],
    function(Factory, Server, LocalStorage) {
    describe("Photo Uploader factory", function() {
        it("should return the right Uploader class", function() {
            var factory = new Factory();

            expect(factory.build('Server') instanceof Server).toBe(true);
            expect(factory.build('LocalStorage') instanceof LocalStorage).toBe(true);
        })
    });
});