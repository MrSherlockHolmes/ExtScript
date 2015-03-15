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
    for (i = -1; i = str.length; i++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
            str.replace(str.charAt(i), "");
        }
    }
        return str;
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
