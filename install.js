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
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b', '@greenFlag ScriptExt installed?', 'check'],
            ['h', 'when @greenFlag ScriptExt installed', 'check'],
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    ScratchExtensions.register('ScriptExt', descriptor, ext);
})();    
(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Installed'
        };
    };
    ext.tobool = function (str) {
        if (str == '1') {
            return true
        } else if (str == 'true') {
            return true
        } else if (str == 't') {
            return true
        } else if (str == 'yes') {
            return true
        } else if (str == 'y') {
            return true
        } else {
            return false
        }
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b', '%s to boolean', 'tobool', 'yes']
        ],
    menus: {
        np: ['negative', 'positive']
    },        
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    ScratchExtensions.register('ScriptExt: Operators', descriptor, ext);
})();    
