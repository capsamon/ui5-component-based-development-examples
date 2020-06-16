sap.ui.define([
	"coremodules/basecontrollers/BaseController",
	"sap/m/MessageToast",
	"coremodules/eventbus"
], function(BaseController, MessageToast, eventbus) {
	"use strict";
	return BaseController.extend("ComponentBasedExampleProject.controller.Overview", {
		onAfterRendering: function(){
			//
		},
		
		onNextPagePress: function () {
			this.getRouter().navTo("Main");
		}
	});
});