sap.ui.define([
	"jquery.sap.global",
	"sap/ui/base/ManagedObject"
], function(jQuery, ManagedObject) {
	"use strict";
	
	var instance;
	
	(function(utilsRef){
		instance = utilsRef || (new (ManagedObject.extend("com.alliander.sapui5.utils.Utils", {
	
			metadata: {
				library: "com.alliander.sapui5.utils"
			},
	
			init: function() {
				
			},
			
			nieuweFunctionHere: function() {
				/* aangepast in master branch */
			}
			
			
			/*Placeholder for generic reusable utilities.*/

			
		}))());

	})(instance);
	
	return instance;
});