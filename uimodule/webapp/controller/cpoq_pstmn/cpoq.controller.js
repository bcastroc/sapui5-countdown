sap.ui.define([
    "../BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/format/DateFormat",
	"sap/ui/thirdparty/jquery"
], function(Controller, JSONModel) {
	"use strict";    

	return Controller.extend("local.myUI5App.controller.cpoq_pstmn.cpoq", {

        //dataPath : "http://localhost:3000/api/v1/cpoq/PurchaseOrders",
        dataPath : "https://e2658eda-d2f7-4644-bcc6-a261af0e71aa.mock.pstmn.io",

		onInit : function() {
			
			var oJSONModel = new JSONModel(this.dataPath + "/PurchaseOrders");
            
			this.getView().setModel(oJSONModel);
		},

		formatAvailableToIcon : function(bAvailable) {
			//return bAvailable ? "sap-icon://accept" : "sap-icon://decline";
            if (bAvailable === " " || bAvailable === "N" || bAvailable === "") return "sap-icon://future";
            if (bAvailable === "P") return "sap-icon://complete";
            if (bAvailable === "E") return "sap-icon://error";
		}

	});

});