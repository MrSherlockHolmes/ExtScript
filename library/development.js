(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 1,
            msg: 'Development'
        };
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'run %s', 'runs', 'reporter'],
            ['h', 'def %s', 'start', 'reporter'],
            [' ', 'end %s with value %s', 'reporter', 'value']
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ScriptExt: Development');
    ScratchExtensions.register('ScriptExt: Development', descriptor, ext);
})();   
