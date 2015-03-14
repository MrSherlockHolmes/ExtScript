(function(ext) {
    var countDown = false;
    var readyS = true;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	    ext.color = function(color2) {return(color2);}
	    var descriptor = {
        blocks: [
            ['r', '%c', 'color', 0],
        ],
        menus: {
            
        }
    };
    ScratchExtensions.register('ealgase', descriptor, ext);
})({}); 
