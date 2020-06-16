sap.ui.define([
	"coremodules/basecontrollers/BaseController",
	"sap/m/MessageToast",
	"coremodules/eventbus"
], function(BaseController, MessageToast, eventbus) {
	"use strict";
	return BaseController.extend("ComponentBasedExampleProject.controller.Main", {
		
		onAfterRendering: function(){
			this.calculateTotals();
		},
		
		onAddSoldBook: function(oEvt){
			var oItem = oEvt.getSource().getBindingContext().getObject();
			oItem.amountSold++;
			this.getView().getModel().refresh();
			this.calculateTotals();
			this.showBookChange();
		},
		
		onRemoveSoldBook: function(oEvt){
			var oItem = oEvt.getSource().getBindingContext().getObject();
			oItem.amountSold--;
			this.getView().getModel().refresh();
			this.calculateTotals();
			this.showBookChange();
		},

		showBookChange: function(){
			MessageToast.show("A book has been added or deleted");
		},

		showBooksSoldRecord: function(){
			MessageToast.show("Over 500 books are sold!!!");
		},
		
		calculateTotals: function(){
			var oModel = this.getView().getModel();
			var aBooks = oModel.getData().books;

			//Bereken totaal aantal verkochte boeken
			var iAmountSold = 0;
			aBooks.forEach((oBook) => { iAmountSold = iAmountSold + oBook.amountSold;});

			//Bepaal de bestseller array
			var aBestSellerArray = aBooks.filter((oBook) => { return oBook.amountSold >= 15;});;
			
			//Set beide properties weer in het model
			oModel.setProperty("/totalNumberSoldBooks", iAmountSold);
			oModel.setProperty("/bestsellers", aBestSellerArray);
			
			//Als er meer dan 500 boeken verkocht zijn, toon dit dan!
			if(parseInt(iAmountSold) > 500){
				this.showBooksSoldRecord();
			}

			if(aBestSellerArray.length > 0){
				MessageToast.show("There are " + aBestSellerArray.length + " bestseller(s) in this list.");
			}
		},

		onAddBookPress: function(oEvt){
			if (!this.oAddBookDialog) {
                this.oAddBookDialog = sap.ui.xmlfragment("ComponentBasedExampleProject.fragments.AddBookDialog", this);
                this.getView().addDependent(this.oAddBookDialog);
            }
            this.oAddBookDialog.open();
		},
		
		onAddBookToModel: function(oEvt){
			var oModel = this.getView().getModel();
			var oBookToAdd = oModel.getData().bookToAdd;
			var aBooks = oModel.getData().books
			aBooks.push(oBookToAdd);
			oModel.setProperty("/books", aBooks);
			this.calculateTotals();
			oEvt.getSource().getParent().close();
		}
	});
});