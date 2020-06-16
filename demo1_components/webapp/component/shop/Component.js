/*global */
sap.ui.define([
	"sap/ui/core/UIComponent",
	"coremodules/loggingStore"
], function(UIComponent, loggingStore) {

	return UIComponent.extend("displayschetsen.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			loggingStore.logInfo("Displayschets module opstarten", null, "DisplaySchetsen");
			UIComponent.prototype.init.apply(this, arguments);
		}
	});

});
