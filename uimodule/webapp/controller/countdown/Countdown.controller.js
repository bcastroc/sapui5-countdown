sap.ui.define([
    "../BaseController",
    "sap/ui/model/json/JSONModel"
],

    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("local.myUI5App.controller.countdown.Countdown", {
            
            onInit: function () {
                
                // const mytilesModel = new JSONModel("../model/tiles.json");
                // this.getView().setModel(mytilesModel, "tiles");
                
            },

            onPress: function (oRoute) {
                alert("Hello " + oRoute);
            }
        });
    });