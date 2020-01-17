var cmdController = require('.././core/commandController');

var eventRouter = function () {
    "use strict";
    var initialize = function (app) {
        app.use('/events', cmdController.router);
    };
    return {
        initialize: initialize
    };
};

module.exports = eventRouter();