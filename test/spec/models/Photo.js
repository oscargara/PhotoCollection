define(['models/Photo'], function(Photo) {
    describe("Photo Model", function() {
        it("should have a default 'Description' string description", function() {
            var photo = new Photo();
            expect(photo.get('description')).toBe('Description');
        })
    });
});