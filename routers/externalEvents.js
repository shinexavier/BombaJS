var commandController = require('.././core/commandController');

var eventRouter = function () {
    "use strict";
    var initialize = function (app) {
        app.use('/events', commandController.router);
    };
    return {
        initialize: initialize
    };
};

module.exports = eventRouter();