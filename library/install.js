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
    ext.install = function (install, installer) {
            // use proxy [hosted by scratchext]
        if (install == 'string stuff') {
            installer = 'string_stuff';
        } else {
            installer = install
        }
            jQuery.getScript('http://scratchextproxy.x10.mx/extscript.php?file=library/' + installer + '.js');
    }
    ext.other = function (other, installer) {
        if (other == 'Alarm Extension') {
            installer = 'alarm_extension';          
        } else if (other == 'Browser Stuff') {
            installer = 'browser_stuff';
        } else if (other == 'Cool helpful things extension') {
            installer = 'cool_helpful';
        } else if (other == 'More Math') {
            installer = 'more_math'
        } else if (other == 'Debugging') {
            installer = 'debugging';
        } else if (other == 'More Operators') {
            installer = 'more_operators';
        } else if (other == 'Link Opener') {
            installer = 'link_opener';
        } else if (other == 'Kvaxtension') {
            installer = 'kvaxtension'
        } else {
            installer = 'javascript_dialogs';
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
        install: ['operators', 'api', 'ealgase', 'string stuff'],
        other: ['Alarm Extension', 'Browser Stuff', 'Cool helpful things extension', 'Debugging', 'More Math', 'More Operators', 'Link Opener', 'Javascript Dialogs', 'Kvaxtension']
    },                
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ScriptExt');
    ScratchExtensions.register('ScriptExt', descriptor, ext);
})();
