//Normally this would be your server connection file, which fetches data from a server
sap.ui.define([], function () {
	"use strict";
	return {
		books: [{
			name: "Great stories I",
			author: "A. Cooijmans",
			dateReleased: new Date("11-02-1990"),
			amountSold: 10,
			image: "https://media.s-bol.com/q7nRopkPrQlG/154x210.jpg"
		}, {
			name: "Great stories II",
			author: "A. Cooijmans",
			dateReleased: new Date("05-22-1991"),
			amountSold: 10,
			image: "https://media.s-bol.com/zvQrEREyjXNY/144x210.jpg"
		}, {
			name: "Children's stories",
			author: "K. Leuzen",
			dateReleased: new Date("01-22-1992"),
			amountSold: 10,
			image: "https://media.s-bol.com/NLGQDm8jjMLD/152x210.jpg"
		}, {
			name: "Little Red Riding Hood",
			author: "B. van Loon",
			dateReleased: new Date("09-26-1996"),
			amountSold: 10,
			image: "https://media.s-bol.com/BLW0KyQ9P6LQ/136x210.jpg"
		}, {
			name: "The Big Friendly Giant",
			author: "P. Auteuring",
			dateReleased: new Date("08-30-1998"),
			amountSold: 10,
			image: "https://media.s-bol.com/3Qx5LYPZrWW9/139x210.jpg"
		}]
	};
});