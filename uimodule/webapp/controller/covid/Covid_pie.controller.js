sap.ui.define([
    "../BaseController",
    "sap/ui/model/json/JSONModel",
    'sap/ui/model/BindingMode',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
],

    function (Controller, JSONModel, BindingMode, ChartFormatter, Format) {
        "use strict";

        return Controller.extend("local.myUI5App.controller.covid.Covid_pie", {
            //dataPath: "../../model",
            dataPath: "https://api.rootnet.in/covid19-in/stats/latest",

            oVizFrame: null,

            onInit: function (evt) {

                // var dataModel = new JSONModel(this.dataPath);
                // this.getView().setModel(dataModel, "latestModelPie");

                Format.numericFormatter(ChartFormatter.getInstance());
                // set explored app's demo model on this sample
                
                var oModel = new JSONModel(this.dataPath);
                oModel.setDefaultBindingMode(BindingMode.OneWay);
                this.getView().setModel(oModel);

                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
                oVizFrame.setVizProperties({
                    legend: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }
                });
                var dataModel = new JSONModel(this.dataPath );
                oVizFrame.setModel(dataModel);

                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);

                //InitPageUtil.initPageSettings(this.getView());

                var that = this;
                dataModel.attachRequestCompleted(function () {
                    that.dataSort(this.getData());
                });
            },

            onPressTracker: function () {
                this.getOwnerComponent().getRouter().navTo("covid_tracker");
            },

            onPressList: function () {
                this.getOwnerComponent().getRouter().navTo("covid_list");
            },

            onPressHome : function () {
                this.getOwnerComponent().getRouter().navTo("RouteTiles");
            }


        });
    });
