var util = require('util'),
    events = require('events'),
    config = require('config'),
    cmdController = null;

function CommandController() {
    "use strict";
    this.router = initializeRouter();
    this.log = log;
    events.EventEmitter.call(this);
}

util.inherits(CommandController, events.EventEmitter);

function initializeRouter() {
    "use strict";
    var currentState = null,
        express = require('express'),
        router = express.Router(),
        fetchStateInfo = function (id) {
            var session = config.get('Bomba.db.sessions')[id];
            return session.state;
        },
        isEventAllowed = function (reqEvent) {
            var stateEvents = config.get('Bomba.States')[currentState]['extEvents'];
            console.log(reqEvent);
            console.log(stateEvents);
            return stateEvents.hasOwnProperty(reqEvent);

        },
        timeLog = function (req, res, next) {
            console.log('Time: ', Date.now());
            next();
        },
        validateState = function (req, res, next) {
            var sessionID = req.query.sessionID;
            currentState = fetchStateInfo(sessionID);
            console.log('Current State:', currentState);
            next();
        },
        validateEvent = function (req, res, next) {
            var reqEvent = req.query.reqEvent,
                eventAllowed = isEventAllowed(reqEvent);
            console.log('Event Valid:', eventAllowed ? 'YES' : 'NO');
            next();
        },
        dispatchEvent = function (req, res, next) {
            var reqEvent = req.query.reqEvent,
                stateEvents = config.get('Bomba.States')[currentState]['extEvents'],
                State = require('.././states/' + currentState),
                stateInstance = new State(cmdController),
                eventSink = stateEvents[reqEvent],
                eventHandler = stateInstance[eventSink];
            console.log('Event Sink:', eventSink);
            if (typeof eventHandler === "function") {
                eventHandler.apply(stateInstance);
            }
            next();
        };
    // middlewares that are specific to this router
    router.use(timeLog);
    router.use(validateState);
    router.use(validateEvent);
    router.use(dispatchEvent);
    return router;
}

cmdController = new CommandController();

cmdController.on('log', function (message) {
    "use strict";
    console.log(message);
});

function log(message) {
    "use strict";
    cmdController.emit('log', message);
}

module.exports = cmdController;