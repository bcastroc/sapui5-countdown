sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
],

    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("local.myUI5App.controller.Tiles", {
            
            onInit: function () {
                
                const mytilesModel = new JSONModel("../model/tiles.json");
                this.getView().setModel(mytilesModel, "tiles");
                
            },

            onPress: function (oRoute) {
                console.log(oRoute);

                if (oRoute.substring(0,3) === "ext") {
                    const jsonObj = JSON.parse(this.getView().getModel("tiles").getJSON()).find(item => item.route === oRoute);
                    console.log(`external url found ${jsonObj.url}`);
                    sap.m.URLHelper.redirect(jsonObj.url);
                }
                else this.getOwnerComponent().getRouter().navTo(oRoute);
                
            }
        });
    });
