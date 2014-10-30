define([
    'lib/Uploaders/Server',
    'lib/Uploaders/LocalStorage'
],
    function(Server, LocalStorage){
        var Factory = function(){
            var build = function(className){
                if('Server' == className) {
                    return new Server();
                }
                if('LocalStorage' == className){
                    return new LocalStorage();
                }
            };
            this.build = build;
        }

        return Factory;
    }
);
