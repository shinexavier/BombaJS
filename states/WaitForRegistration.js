function WaitForRegistration(cmdController) {
    "use strict";
    var handlerRegister = function () {
            cmdController.log('handlerRegister invoked...');
        },
        handlerSubmitSMS = function () {
            cmdController.log('handlerSubmitSMS invoked...');
        },
        validateInputs = function () {
            cmdController.log('validateInputs invoked...');
        },
        checkServerConfig = function () {
            cmdController.log('checkServerConfig invoked...');
        },
        sendOK = function () {
            cmdController.log('sendOK invoked...');
        },
        sendSENDSMS = function () {
            cmdController.log('sendSENDSMS invoked...');
        };
    this.handlerRegister = handlerRegister;
    this.handlerSubmitSMS = handlerSubmitSMS;
    this.validateInputs = validateInputs;
    this.checkServerConfig = checkServerConfig;
    this.sendOK = sendOK;
    this.sendSENDSMS = sendSENDSMS;
}

module.exports = WaitForRegistration;