sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/library",
	"sap/ui/core/Core"
], function(jQuery) {
	"use strict";
	
	//Custom include the "/css/library.css"
	jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("com.alliander.sapui5.utils") + "/css/library.css");

	/**
	 * Load the utils library.
	 * 
	 * Known issue: framework is unable to find a 'themes' folder when custom themes are applied (like allianderthemebelize).
	 */
	sap.ui.getCore().initLibrary({
		name: "com.alliander.sapui5.utils",
		version: "1.0.0",
		dependencies: ["sap.ui.core"],
		noLibraryCSS: true,					//Disable loading additional themes styling.
		types: [],
		interfaces: [],
		controls: [
			"com.alliander.sapui5.utils.Utils",
			"com.alliander.sapui5.utils.SplashScreen"
		],
		elements: [
		]
	});
	
	return com.alliander.sapui5.utils;

}, false);