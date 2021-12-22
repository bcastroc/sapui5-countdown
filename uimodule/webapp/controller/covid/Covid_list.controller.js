sap.ui.define([
    "../BaseController",
    "sap/ui/model/json/JSONModel"
],

    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("local.myUI5App.controller.covid.Covid_list", {
            //dataPath: "../../model",
            dataPath: "https://api.rootnet.in/covid19-in/stats/latest",

            onInit: function () {
                
                var dataModel = new JSONModel(this.dataPath );
                this.getView().setModel(dataModel, "latestModel");


            },

            onPressTracker: function () {
                this.getOwnerComponent().getRouter().navTo("covid_tracker");
            },

            onPressGraph: function () {
                this.getOwnerComponent().getRouter().navTo("covid_pie");
            },

            onPressHome : function () {
                this.getOwnerComponent().getRouter().navTo("RouteTiles");
            }


        });
    });
