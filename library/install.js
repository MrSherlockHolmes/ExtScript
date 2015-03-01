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
    ext.checkhat = function () {
      return true;
    };
    ext.install = function (install) {
        if (install == 'operators') {
            // use proxy [hosted by scratchext]
            jQuery.getScript('http://scratchextproxy.x10.mx/extscript.php?file=operators.js');
        } else if (intall == 'data') {
            jQuery.getScript('http://scratchextproxy.x10.mx/extscript.php?file=data.js'); 
    }
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b', '@greenFlag ScriptExt installed?', 'check'],
            ['h', 'when @greenFlag ScriptExt installed', 'checkhat'],
            [' ', 'install %m.install', 'install', 'operators']
        ],
    menus: {
        install: ['operators'],
    },                
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ScriptExt');
    ScratchExtensions.register('ScriptExt', descriptor, ext);
})();
