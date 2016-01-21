function WaitForRegistration(smContext) {
    "use strict";
    var handlerRegister = function () {
            this.log('handlerRegister invoked...');
        },
        handlerSubmitSMS = function () {
            smContext.log('handlerSubmitSMS invoked...');
        },
        validateInputs = function () {
            smContext.log('validateInputs invoked...');
        },
        checkServerConfig = function () {
            smContext.log('checkServerConfig invoked...');
        },
        sendOK = function () {
            smContext.log('sendOK invoked...');
        },
        sendSENDSMS = function () {
            smContext.log('sendSENDSMS invoked...');
        };
    this.handlerRegister = handlerRegister;
    this.handlerSubmitSMS = handlerSubmitSMS;
    this.validateInputs = validateInputs;
    this.checkServerConfig = checkServerConfig;
    this.sendOK = sendOK;
    this.sendSENDSMS = sendSENDSMS;
}

module.exports = WaitForRegistration;