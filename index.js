//External Modules
var express = require('express'),
    app = express(),
    colour = require('colour');

//Internal Modules (Core)
var cmdController = require('./routers/externalEvents');

//Internal Modules (Others)

// External Event Handlers Initialization
cmdController.initialize(app);

if (!module.parent) {
    app.listen(8166);
    console.log('Bomba started on port 8166...'.rainbow);
}