(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Installed'
        };
    };
    
    // block functions
    ext.removecaps = function(str, callback) {
        // simple regular expression
        callback(str.replace(/[A-Z]/g, '');
    };
    ext.removelowers = function(str, callback) {
        // simple regular expression
        callback(str.replace(/[a-z]/g, '');
    };
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'Remove uppercase from %s', 'removecaps', 'Hello!'],
            ['R', 'Remove lowercase from %s', 'removelowers', 'Hello!'],
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ExtScript: StringStuff');
    ScratchExtensions.register('StringStuff', descriptor, ext);
})();
