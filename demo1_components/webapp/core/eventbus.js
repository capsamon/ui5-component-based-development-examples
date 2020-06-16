sap.ui.define([
	"sap/ui/core/EventBus",
], function(EventBus) {
	const AppEventBus = EventBus.extend("AppEventBus", {
		publish: function(sChannelID, event, data) {
			console.log("event: " + sChannelID + ":" + event);
			console.log("event data:");
			console.log(data);
			EventBus.prototype.publish.apply(this, arguments);
		}
	})

	const eventbus = new AppEventBus();

	return eventbus;
});