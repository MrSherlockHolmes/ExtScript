(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Installed'
        };
    };
    ext.admin = function () {
     return Scratch.INIT_DATA.ADMIN;
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b', 'is user an admin?', 'admin']
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ScriptExt');
    ScratchExtensions.register('ScriptExt', descriptor, ext);
})();
