sap.ui.define([
	"jquery.sap.global",
	"sap/ui/base/ManagedObject"
], function(jQuery, ManagedObject) {
	"use strict";
	
	/**
	 * Create single instance of AppSettings.
	 */
	var instance;
	
	(function(instanceRef){
		instance = instanceRef || (new (ManagedObject.extend("com.alliander.sapui5.utils.AppSettings", {
	
			metadata: {
				library: "com.alliander.sapui5.utils",
				properties: {
					"appName": { type: "string" },
					"appId": { type: "string" },
					"version": { type: "string" },
					"build": { type: "int" },
					"system": { type: "string" },
					"lockscreen": {type: "boolean", defaultValue: false},
					"errorLoggingEnabled": { type: "boolean", defaultValue: false },
					"usageLoggingEnabled": { type: "boolean", defaultValue: false }
				}
			},
	
			init: function() {
				try {
					
					/**
					 * The relative path to webapp folder is:
					 *  - "./" in hybrid
					 *  - "./" in webide
					 *  - "./" in Stand-alone ABAP deployment.
					 *  - "./{dynamic-guid}/" in LaunchPad
					 * 
					 * To also support the Launchpad we need to get the relative path using "getModulePath".
					 * Using the current utils module getModulePath("com.alliander.sapui5.utils") will lead us
					 *   to "./alliander/utils"
					 *   or "./{dynamic-guid}/alliander/utils".
					 * 
					 * Using "/../../" will lead back to the webapp root folder where we find the alliander_app_settings.json
					 */
					var relativePath = jQuery.sap.getModulePath("com.alliander.sapui5.utils", "/../../");
					
					// Assume the alliander_app_settings.json is always available in the webapp folder.
					var appJSON = jQuery.sap.syncGetJSON(relativePath+"alliander_app_settings.json", null, {});

					/**
					 * To determine the environment we use:
					 * 
					 *	- alliander_mobile.json file in Hybrid Apps (added through build script):
					 * 
					 *		+ OTAP: "DEV", SMP_appId:  "com.alliander.genericclient.cert.{appId}"
					 *		+ OTAP: "TST", SMP_appId:  "com.alliander.genericclient.cert.{appId}"
					 *		+ OTAP: "ACC", SMP_appId:  "com.alliander.genericclient.cert.{appId}"
					 *		+ OTAP: "PROD", SMP_appId: "com.alliander.cert.{appId}"
					 * 
					 *  - window.location.hostname.substr(0,3) in Web Apps:
					 * 
					 *		+ web(ide)	-> OTAP: "DEV", SMP_appId:  "com.alliander.genericclient.cert.{appId}"
					 *		+ dgw		-> OTAP: "DEV", SMP_appId:  "com.alliander.launchpad.cert.{appId}"
					 *		+ agw		-> OTAP: "TST", SMP_appId:  "com.alliander.launchpad.cert.{appId}"
					 *		+ kgw		-> OTAP: "ACC", SMP_appId:  "com.alliander.launchpad.cert.{appId}"
					 *		+ pgw		-> OTAP: "PROD", SMP_appId: "com.alliander.launchpad.cert.{appId}"
					 */
					var envJSON = jQuery.sap.syncGetJSON(relativePath+"alliander_mobile.json", null, {
						OTAP: undefined,
						SMP_appId: undefined
					});

					if (envJSON.OTAP === undefined) {
						try {
							switch(window.location.hostname.toLowerCase().substr(0,3)) {
								case "web":
									// WebIDE, assume you want to test Hybrid thus using genericclient.
									envJSON.OTAP = "DEV";
									envJSON.SMP_appId = "com.alliander.genericclient.cert." + appJSON.SMP_appID;
									break;
								case "dgw":
									envJSON.OTAP = "DEV";
									envJSON.SMP_appId = "com.alliander.launchpad.cert." + appJSON.SMP_appID;
									break;
								case "agw":
									envJSON.OTAP = "TST";
									envJSON.SMP_appId = "com.alliander.launchpad.cert." + appJSON.SMP_appID;
									break;
								case "kgw":
									envJSON.OTAP = "ACC";
									envJSON.SMP_appId = "com.alliander.launchpad.cert." + appJSON.SMP_appID;
									break;
								case "pgw":
									envJSON.OTAP = "PROD";
									envJSON.SMP_appId = "com.alliander.launchpad.cert." + appJSON.SMP_appID;									
									break;
							}
						} catch(err) {
							// Something went wrong, assume DEV environment.
							envJSON.OTAP = "DEV";
							envJSON.SMP_appId = "com.alliander.launchpad.cert." + appJSON.SMP_appID;
						}
					}
					
		    		this.setAppName(appJSON.appname);
		    		this.setAppId(envJSON.SMP_appId);
		    		this.setVersion(appJSON.version);
		    		this.setBuild(appJSON.buildnumber);
		    	    this.setLockscreen(appJSON.lockscreen);
		    		this.setSystem(envJSON.OTAP);
				} catch(err) {
					console.error("Failed to initialize the AppSettings.");
					console.error(err);
				}
			}
		}))());

	})(instance);
	
	return instance;
});