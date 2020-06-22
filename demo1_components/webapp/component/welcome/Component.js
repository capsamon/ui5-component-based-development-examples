/*global */
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"ComponentBasedExampleProject/mockData/mockData"
], function(UIComponent, JSONModel, mockData) {

	return UIComponent.extend("welcome.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			var oModel = new JSONModel(mockData);
			this.setModel(oModel);

			UIComponent.prototype.init.apply(this, arguments);
		}
	});

});
