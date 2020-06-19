/*global */
sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {

	return UIComponent.extend("shop.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
		}
	});

});
