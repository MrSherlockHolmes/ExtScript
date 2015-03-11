(function () {
    var ext = this;
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Installed'
        };
    };
    ext.projectdata = function(num) {
        window.open('http://scratch.mit.edu/api/v1/project/' + num + '/?format=json');
    };
    ext.projectcomments = function(num, num2) {
        window.open(//no!);  
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'Find data for project id %n', 'projectdata', '2000000'],
            [' ', 'Find comments for page %n of project id %n', 'projectcomments', '1', '2000000'],
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ScratchApi');
    ScratchExtensions.register('ScratchApi', descriptor, ext);
})();
