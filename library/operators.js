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
            return true;
        } else if (str == 'true') {
            return true;
        } else if (str == 't') {
            return true;
        } else if (str == 'yes') {
            return true;
        } else if (str == 'y') {
            return true;
        } else {
            return false;
        }
    }
    ext.updown = function(num, both) {
        if (Math.abs(num) == num) {
            if (both == 'negative') {
                return false;
            } else {
                return true;
            }
        } else {
            if (both == 'negative') {
                return true;
            } else {
                return false;
            }
        }
    }
    ext.truefalse = function(tf) {
        if (tf == 'true') {
            return true;
        } else {
            return false;
        }
    }
    ext.math = function(mathobj) {
        if (mathobj == 'e') {
            return Math.E;
        } else if (mathobj == 'natural logarithm of 2') {
            return Math.LN2;
        } else if (mathobj == 'natural logarithm of 10') {
            return Math.LN10;
        } else if (mathobj == 'base-2 logarithm of E') {
            return Math.LOG2E;
        } else if (mathobj == 'base-10 logarithm of E') {
            return Math.LOG10E;
        } else if (mathobj == 'pi') {
            return Math.PI;
        } else if (mathobj == 'square root of a half') {
            return Math.SQRT1_2;
        } else {
            return Math.SQRT2;
        }
    }
    ext.admincheck = function() {
      return Scratch.INIT_DATA.ADMIN;
    }
    ext.thumbnail = function() {
    window.open(Scratch.INIT_DATA.LOGGED_IN_USER.model.thumbnail_url); 
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['b', '%s to boolean', 'tobool', 'yes'],
            ['b', 'is %n %m.both ?', 'updown', '-10', 'negative'],
            ['b', '%m.tf', 'truefalse', 'true'],
            ['b', 'is user an admin?', 'admincheck'],
            ['-'],
            ['r', '%m.mathobj', 'math', 'e'],
            ['-'],
            [' ', 'Open thumbnail image', 'thumbnail']
        ],
    menus: {
        both: ['negative', 'positive'],
        tf: ['true', 'false'],
        mathobj: ['e', 'pi', 'natural logarithm of 2', 'natural logarithm of 10', 'base-2 logarithm of E', 'base-10 logarithm of E', 'square root of a half', 'square root of 2']
    },        
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ScriptExt: Operators');
    ScratchExtensions.register('ScriptExt: Operators', descriptor, ext);
})();   
