new (function() {
    var ext = this;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Functions for block with type 'w' will get a callback function as the 
    // final argument. This should be called to indicate that the block can
    // stop waiting.
    ext.alert_stuffs = function(alert, callback) {
        window.alert(alert);
        callback();
    };
    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    ext.pieBlock= function(pie) {
        if (pie == 'pi') {
            return Math.PI;
        } else if (pie == 'e') {
            return Math.E;
        } else {
            return;
        }
    };
    ext.calculate = function(mathystuffs) {
        return eval(mathystuffs.replace(/[^-()\d/*+.]/g, ''));
    };
    ext.factorialBlock = function(num) {
        var rval=1;
        for (var i = 2; i <= num; i++) {
              rval = rval * i;
        }
        if(true) {
        return rval;
        }
    };
    ext.openurl = function(url, callback) {
      var openurlwin = window.open(url, '_blank');
      openurlwin.focus();
      callback();
    };
    ext.trueBlock = function() {
      return true;
     };
    ext.falseBlock = function() {
      return false;
     };
    ext.userPage = function(user, callback) {
      window.open('http://scratch.mit.edu/users/' + user, '_blank').focus();
      callback();
    };
    ext.searchNewTab = function(query, engine, callback) {
      var realquery = query.replace(" ", "+");
      if (engine == 'Google') {
          window.open('http://www.google.com/search?q=' + realquery, '_blank').focus();
      } else if (engine == 'Duck Duck Go') {
          window.open('http://www.duckduckgo.com/?q=' + realquery, '_blank').focus();
      } else if (engine == 'Bing') {
          window.open('http://bing.com/search?q=' + realquery, '_blank').focus();
      } else if (engine == 'Ask') {
          window.open('http://ask.com/web?q=' + realquery, '_blank').focus();
      } else if (engine == 'Yahoo') {
          window.open('http://search.yahoo.com/search?q=' + realquery + '&fr=sfp', '_blank').focus();
      } else {
          return;
      }
      callback();
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['w', 'alert %s', 'alert_stuffs'],
            ['r', 'calculate %s', 'calculate', '1 + 1'],
            ['r', '%n ^ %n', 'power', 2, 3],
            ['w', 'open %s in new tab', 'openurl', 'http://www.google.com/'],
            ['w', 'search %s on %m.searchEngine', 'searchNewTab'],
            ['w', 'open user page for %s', 'userPage', 'Lightnin'],
            ['r', '%m.PIE', 'pieBlock', 'pi'],
            ['b', 'true', 'trueBlock'],
            ['b', 'false', 'falseBlock'],
            ['r', '%n factorial', 'factorialBlock'],
        ],
        menus: {
           searchEngine: ['Google', 'Yahoo', 'Bing','Duck Duck Go','Ask'],
           PIE: ['pi', 'e'],
       },
	url: 'http://www.google.com/'
    };

    // Register the extension
    ScratchExtensions.register('Cool helpful things extension', descriptor, ext);
})();
