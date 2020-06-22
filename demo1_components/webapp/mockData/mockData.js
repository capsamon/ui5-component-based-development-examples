//Normally this would be your server connection file, which fetches data from a server
sap.ui.define([], function () {
	"use strict";
	return {
		books: [{
			name: "Great stories I",
			author: "A. Cooijmans",
			dateReleased: new Date("11-02-1990"),
			amountSold: 10,
			image: ""
		}, {
			name: "Great stories I",
			author: "A. Cooijmans",
			dateReleased: new Date("05-22-1991"),
			amountSold: 10,
			image: ""
		}, {
			name: "Children's stories",
			author: "K. Leuzen",
			dateReleased: new Date("01-22-1992"),
			amountSold: 10,
			image: ""
		}, {
			name: "Little Red Riding Hood",
			author: "B. van Loon",
			dateReleased: new Date("09-26-1996"),
			amountSold: 10,
			image: ""
		}, {
			name: "De Big Friendly Giant",
			author: "P. Auteuring",
			dateReleased: new Date("08-30-1998"),
			amountSold: 10,
			image: ""
		}]
	};
});