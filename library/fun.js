(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Installed'
        };
    };
    ext.query = function(str, respe) {
     if (str == 'Hi!') {
        respe = 'Hello!';
     } else if (str == 'Hello!') {
         respe = 'Hi!';
     } else if (str == 'How are you?') {
         respe = 'Good thanks!';
     } else if (str == 'Do you like queries?') {
         respe = 'Yep! Sort of!';
     } else if (str == 'Are you good at maths?') {
         respe = 'Unfortuantely not.';
     } else {
         respe = 'Sorry?';
     }
    }
    ext.respond = function(respe) {
        return respe;
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'query %s', 'query', 'Hi!'],
            ['r', 'response', 'respond']
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ExtScript: Fun');
    ScratchExtensions.register('ExtScript: Fun', descriptor, ext);
})();
