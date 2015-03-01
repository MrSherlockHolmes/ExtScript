(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Installed'
        };
    };
    ext.check = function () {
      return true;
    };
    ext.install = function (install) {
        if (install == 'operators') {
            jQuery.getScript('https://raw.githubusercontent.com/MrSherlockHolmes/ExtScript/master/operators.js');
        }
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b', '@greenFlag ScriptExt installed?', 'check'],
            ['h', 'when @greenFlag ScriptExt installed', 'check'],
            [' ', 'install %m.install', 'install', 'operators']
        ],
    menus: {
        install: ['operators'],
    },                
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    ScratchExtensions.register('ScriptExt', descriptor, ext);
})();    
