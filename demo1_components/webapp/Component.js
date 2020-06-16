/* global */
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"ComponentBasedExampleProject/mockData/mockData"
], function(UIComponent, JSONModel, mockData) {
	"use strict";
	return UIComponent.extend("ComponentBasedExampleProject.Component", {
		metadata: {
			manifest: "json"
		},
		init: function() {
			var oModel = new JSONModel(mockData);
			this.setModel(oModel);

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			this.getRouter().initialize();
		},
	});
});