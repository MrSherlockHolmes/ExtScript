new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['w', 'alert %s and wait', 'alertBlock', 'Hello!'],
			['w', 'confirm %s and wait', 'confirmBlock', 'Are you sure?'],
			['b', 'confirm answer', 'confirmBool'],
			['w', 'prompt %s and wait with default text %s', 'promptBlock', 'What\'s your name?', ''],
			['r', 'prompt answer', 'promptReporter']
		]
	};
	
	ext.confirmR = false;
	ext.promptR = '';
	
	ext._shutdown = function() {
		promptR = '';
		confirmR = false;
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.alertBlock = function(string, callback) {
		alert(string);
		callback();
	};
	
	ext.confirmBlock = function(string, callback) {
		confirmR = confirm(string);
		callback();
	};
	
	ext.confirmBool = function() {
		return confirmR;
	};
	
	ext.promptBlock = function(string, defaulttext, callback) {
		promptR = prompt(string, defaulttext);
		callback();
	};
	
	ext.promptReporter = function() {
		return promptR;
	};
	
	ScratchExtensions.register('JavaScript Dialogs', descriptor, ext);
})();
