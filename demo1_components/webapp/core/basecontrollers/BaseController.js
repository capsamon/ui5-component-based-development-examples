/*global */
sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
function (
	Controller
) {

	"use strict";

	return Controller.extend("coremodules.basecontrollers.BaseController", {

		getName: function () {
			return this.getMetadata().getName()
		},

		/**
         * Convenience method for getting the view model by name in every controller of the application.
         * @public
         * @param {string} sName the model name
         * @returns {sap.ui.model.Model} the model instance
         */
		getModel: function (sName) {
			return this.getView().getModel(sName);
		},

		getComponent: function () {
			return this.getOwnerComponent();
		},

		getRouter: function () {
			return this.getComponent().getRouter();
		},

		getComponentName: function () {
			return this.getComponent().getMetadata().getComponentName();
		},

		/**
         * Convenience method for setting the view model in every controller of the application.
         * @public
         * @param {sap.ui.model.Model} oModel the model instance
         * @param {string} sName the model name
         * @returns {sap.ui.mvc.View} the view instance
         */
		setModel: function (oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		/**
         * Convenience method for getting the resource bundle.
         * @public
         * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
         */
		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		onCloseDialog: function (oEvt) {
			oEvt.getSource().getParent().close();
		},

		onNavBack: function () {
			history.go(-1);
		},

		onShopPress: function () {
			this.getRouter().navTo("Shop");
		},

		onBookOverviewPress: function () {
			this.getRouter().navTo("Main");
		}
	});
});
