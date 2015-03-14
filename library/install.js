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
            // use proxy [hosted by scratchext]
            jQuery.getScript('http://scratchextproxy.x10.mx/extscript.php?file=library/' + install + '.js');
    }
    ext.other = function (other, installer) {
        if (other == 'Alarm Extension') {
            installer = 'alarm_extension';          
        } else if (other == 'Browser Stuff') {
            installer = 'browser_stuff';
        } else if (other == 'Cool helpful things extension') {
            installer = 'cool_helpful';
        } else {
            installer = 'debugging';
        }
            jQuery.getScript('http://scratchextproxy.x10.mx/extscript.php?file=other/' + installer + '.js');        
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b', '@greenFlag ScriptExt installed?', 'check'],
            ['h', 'when @greenFlag ScriptExt installed', 'checkhat'],
            [' ', 'install library %m.install', 'install', 'operators'],
            [' ', 'install other library %m.other', 'other', 'Alarm Extension']
        ],
    menus: {
        install: ['operators', 'api'],
        other: ['Alarm Extension', 'Browser Stuff', 'Cool helpful things extension', 'Debugging']
    },                
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ScriptExt');
    ScratchExtensions.register('ScriptExt', descriptor, ext);
})();
