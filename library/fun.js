(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Installed'
        };
    };
    ext.query = function(str, resp) {
     if (str == 'Hi!') {
     
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'query %s', 'query', 'Hi!'],
            ['r', 'response', 'respond']
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ExtScript: Fun');
    ScratchExtensions.register('ExtScript: Fun', descriptor, ext);
})();
