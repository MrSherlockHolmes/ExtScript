(function(ext) {
    var countDown = false;
    var readyS = true;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	
	
	
	
	    ext.color = function(color2) {return(color2);}
	    ext.pi = function(){return(Math.PI)}
	
	
	
	
	    var descriptor = {
        blocks: [
            ['r', '%c', 'color', 0],
			['r','pi','pi']
			],
        menus: {
          
        }
    };
    ScratchExtensions.register('ealgase-ext', descriptor, ext);
})({}); 
