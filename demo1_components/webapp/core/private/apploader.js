/* global */
sap.ui.define([
	"sap/ui/core/ComponentContainer",
	"sap/m/Shell"
], function (ComponentContainer, Shell) {
	"use strict";

	function startAnimationToMainUI() {
		setTimeout(() => {
			$("div.alliander-bus").animate({ "left": "150px" }, "slow");
			setTimeout(() => {
				$("#splashscreen").fadeOut("slow", function() {
					$("#content").fadeIn("slow");
					$("#sap-ui-static").fadeIn("slow");
				});
			}, 900);
		}, 1600);
	}

	function loadComponent(sComponent) {
		return new Promise((resolve) => {
			const oCompContainer = new ComponentContainer({
				height : "100%"
			});
			const oShell = new Shell({
				app: oCompContainer,
				appWidthLimited : false
			});
			function loadComponentInShell() {
				return sap.ui.component({
					name: sComponent,
					manifestFirst: false,
					async: true,
					settings: {
						id: "StoringsApp"
					}
				}).then(function(oComponent){
					oShell.placeAt("content");
					oCompContainer.setComponent(oComponent);
					resolve();
				});
			}

			function appStarter() {
				// verwijder de listener als je wilt dat de app afsluit wanneer op het hoofdscherm op de fysieke backknop drukt
				// In overleg met de PO is besloten dat de app niet afgesloten moet worden...
				function onBackButton(oEvent) {
					oEvent.preventDefault();
				}
				document.addEventListener("backbutton", onBackButton);
				loadComponentInShell(sComponent).then(() => 
					document.removeEventListener("backbutton", onBackButton)
				);
			}

			if (window.cordova) {
				document.addEventListener( "deviceready", appStarter);
			} else {
				appStarter();
			}
		})
	}

	function registerComponents(components) {
		components.forEach((component) => jQuery.sap.registerResourcePath(component, "./component/" + component));
	}

	function preloadComponents(components) {
		return Promise.all(components.map((component) => sap.ui.component.load({
			name: component,
			manifestFirst: false,
			async: true,
			settings: {
				id: component
			},
			id: component
		})));
	}

	function enableMocking(component) {
		sap.ui.require([`${component}/testfunctions`], function(testfunctions) {
			testfunctions.enableMocking();
		});
	}

	return {
		loadComponent,
		registerComponents,
		preloadComponents,
		startAnimationToMainUI,
		enableMocking
	}
	
});