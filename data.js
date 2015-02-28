(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Ready'
        };
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    ScratchExtensions.register('ScriptExt: Math', descriptor, ext);
})(); 
