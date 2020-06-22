sap.ui.define([
	"coremodules/basecontrollers/BaseController",
	"sap/m/MessageToast",
	"coremodules/eventbus"
], function(BaseController, MessageToast, eventbus) {
	"use strict";
	return BaseController.extend("welcome.controller.Main", {
		
		onAfterRendering: function () {
			//
		}
	});
});