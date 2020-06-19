sap.ui.define([
	"jquery.sap.global",
	"./library",
	"sap/ui/core/Control"
], function (jQuery, library, Control) {
	"use strict";

	return Control.extend("com.alliander.sapui5.utils.SplashScreen", {

		metadata: {
			library: "com.alliander.sapui5.utils"
		},

		init: function () {

		},

		getSplashScreenVersionString: function () {
			return "App is being loaded";
		},
		
		getYearText: function(){
			return "";
		}

	});

});