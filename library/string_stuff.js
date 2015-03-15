//Warning! Untested. This may loop forever.
(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Installed'
        };
    };
    ext.removecaps = function(str, i) {
        return str.toLowerCase();
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'Remove caps from %s', 'removecaps', 'Hello!'],
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ExtScript: StringStuff');
    ScratchExtensions.register('StringStuff', descriptor, ext);
})();
