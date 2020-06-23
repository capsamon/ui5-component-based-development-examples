/*global */
sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {

	return UIComponent.extend("book.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
		}
	});

});
