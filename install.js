(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Ready'
        };
    };
    ext.check = function () {
      return true;
    };
    //Not working :/
    ext.install = function () {
        if (library == 'data') {
            (function(){$.getScript("https://rawgit.com/MrSherlockHolmes/ExtScript/master/install.js");}());
        } else {
            (function(){$.getScript("https://rawgit.com/MrSherlockHolmes/ExtScript/master/experimental.js");}());
        }
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b', '@greenFlag ScriptExt installed?', 'check'],
            ['h', 'when @greenFlag ScriptExt installed', 'check'],
    //[' ', 'load library m.library', 'install']
        ],
    menus: {
        library: ['data', 'experimental']
    },        
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    ScratchExtensions.register('ScriptExt', descriptor, ext);
})();    
