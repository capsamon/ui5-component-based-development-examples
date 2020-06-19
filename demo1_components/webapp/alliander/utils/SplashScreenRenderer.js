sap.ui.define([
	"jquery.sap.global",
	"./library"
], function() {
	"use strict";
	
	var Class = {};
	
	Class.render = function(oRm, oControl) {
		//Visibility.
		if(!oControl.getVisible()) {
			return;
		}
		
		/*Write control header*/
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.writeClasses();
		oRm.write(">");
		
		/*Splash Image and year text*/
		oRm.write("<div class='image-div'>");
		oRm.write("<img src='./alliander/utils/img/splash.png' class='splash-image'></img>");
		oRm.write("<div class='splash-year-text'>"  + oControl.getYearText() + "</div>");
		oRm.write("</div>");
		
		oRm.write("<div class='alliander-bus'></div>");
		oRm.write("<div class='spinner'></div>");
		
		/*Version text*/
		oRm.write("<div class='splash-appversion splash-appversion-font'>");
		oRm.write("	<div class='splash-version-text' id='appversion'>" + oControl.getSplashScreenVersionString() + "</div>");
		oRm.write("</div>");
		
		/*End of control.*/
		oRm.write("</div>");
	};
	
	return Class;
	
}, true);