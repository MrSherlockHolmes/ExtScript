/* savaka */
new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['h', 'when %b', 'when'],
			['r', 'if %b then %s else %s', 'ifrep'],
			['r', 'letters %n to %n of %s', 'sub'],
			['r', 'letters %n to end of %s', 'sub2'],
			['b', '%s contains %s', 'contain']
		]
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.when = function(bool) {
		if (bool === true) {
			return true;
		};
	};
	
	ext.ifrep = function(bool, val1, val2) {
		if (bool === true) {
			return val1;
		} else {
			return val2;
		};
	};
	
	ext.sub = function(start, end, string) {
		var subs = start - 1
		return string.substring(subs, end);
	};
	
	ext.sub2 = function(start, string) {
		var subs = start - 1
		return string.substring(subs);
	};
	
	ext.contain = function(big, small) {
		if (small === '') {
			return false;
		} else {
			return (big.indexOf(small) > -1);
		};
	};
	
	ScratchExtensions.register('More Operators', descriptor, ext);
})();
