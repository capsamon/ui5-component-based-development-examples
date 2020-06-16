sap.ui.define([
	"coremodules/basecontrollers/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("ComponentBasedExampleProject.controller.App", {
		onInit: function () {
			//
		},

		onAfterRendering: function (oEvt) {
			//
		},

		onOpenSettings: function () {
			
		},

		onShopPress: function () {
			this.getRouter().navTo("Shop");
		}
	});

});
