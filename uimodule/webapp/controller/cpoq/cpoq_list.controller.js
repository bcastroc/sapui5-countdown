sap.ui.define([
    "../BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/format/DateFormat",
	"sap/ui/thirdparty/jquery"
], function(Controller, JSONModel) {
	"use strict";    

	return Controller.extend("local.myUI5App.controller.cpoq.cpoq_list", {

        //dataPath : "http://localhost:3000/api/v1/cpoq/PurchaseOrders",
        dataPath : "../../model",

		onInit : function() {
			
			var oJSONModel = new JSONModel(this.dataPath + "/cpoq.PurchaseOrders.json");
            
			this.getView().setModel(oJSONModel);
		},

		formatAvailableToIcon : function(bAvailable) {
			//return bAvailable ? "sap-icon://accept" : "sap-icon://decline";
            if (bAvailable === " " || bAvailable === "N") return "sap-icon://future";
            if (bAvailable === "P") return "sap-icon://complete";
            if (bAvailable === "E") return "sap-icon://error";
		}

	});

});