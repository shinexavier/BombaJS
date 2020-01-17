//External Modules
var express = require('express'),
    expressApp = express(),
    consoleColour = require('colour');

//Internal Modules (Core)
var extEventRouter = require('./routers/externalEvents');

//Internal Modules (Others)

// External Event Router & Handlers Initialization
extEventRouter.initialize(expressApp);

if (!module.parent) {
    expressApp.listen(8166);
    console.log('Bomba started on port 8166...'.rainbow);
}