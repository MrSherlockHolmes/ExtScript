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
        window.open('http://scratch.mit.edu/site-api/comments/project/' + num2 + '/?page=' + num);  
    };
    ext.studiocomments = function(num, num2) {
        window.open('http://scratch.mit.edu/site-api/comments/gallery/' + num2 + '/?page=' + num);
    };
    ext.studioprojects = function(num, num2) {
        window.open('http://scratch.mit.edu/site-api/projects/in/' + num2 + '/' + num);
    };
    ext.curatestudios = function() {
        window.open('http://scratch.mit.edu/site-api/galleries/');
    };
    ext.userlist = function(num, num2) {
        window.open('http://scratch.mit.edu/api/v1/user/?offset=' + num + '&limit=' + num2 + '&format=json');
    };
    ext.useractivity = function(str, num) {
        window.open('http://scratch.mit.edu/messages/ajax/user-activity/?user=' + str + '&max=' + num);
    };
    ext.usercomments = function(str) {
        window.open('http://scratch.mit.edu/site-api/comments/user/' + str + '/');
    };
    ext.userfeatured = function(str) {
        window.open('http://scratch.mit.edu/site-api/users/all/' + str + '/');
    };
    ext.friendactivity = function(num) {
        window.open('http://scratch.mit.edu/messages/ajax/friends-activity/?max=' + num);
    };
    ext.backpack = function(str) {
        window.open('http://scratch.mit.edu/internalapi/backpack/' + str + '/get/');
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'Open data for project id %n', 'projectdata', '2000000'],
            [' ', 'Open comments for page %n of project id %n', 'projectcomments', '1', '2000000'],
            [' ', 'Open comments for page %n of studio %n', 'studiocomments', '1', '200000'],
            [' ', 'Open projects for page %n of studio %n', 'studioprojects', '1', '20000'],
            [' ', 'Open names of studios I curate', 'curatestudios'],
            [' ', 'Open user list starting at %n for %n', 'userlist', '1000', '10'],
            [' ', 'Open user activity for %s for %n', 'useractivity', Scratch.INIT_DATA.LOGGED_IN_USER.model.username, '10'],
            [' ', 'Open user comments for %s', 'usercomments', Scratch.INIT_DATA.LOGGED_IN_USER.model.username],
            [' ', 'Open featured project for %s', 'userfeatured', Scratch.INIT_DATA.LOGGED_IN_USER.model.username],
            [' ', 'Open friend activity for %n', 'friendactivity', '10'],
            [' ', 'Open backpack content for %s', 'backpack', Scratch.INIT_DATA.LOGGED_IN_USER.model.username],
        ],
        url: "https://github.com/MrSherlockHolmes/ExtScript/blob/master/README.md"        
    };
    
    ScratchExtensions.unregister('ScratchApi');
    ScratchExtensions.register('ScratchApi', descriptor, ext);
})();
