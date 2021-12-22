sap.ui.define([
    "../BaseController",
    "sap/ui/model/json/JSONModel",
    'sap/ui/model/BindingMode',
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
],

    function (Controller, JSONModel, BindingMode, FlattenedDataset, ChartFormatter, Format) {
        "use strict";

        return Controller.extend("local.myUI5App.controller.covid.Covid", {
            dataPath: "../../model",
            //dataPath: "https://api.rootnet.in/covid19-in/stats/history",
            oVizFrame: null,

            onInit: function (evt) {
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern;
                

                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
                oVizFrame.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            formatString: formatPattern.SHORTFLOAT_MFD2,
                            visible: true
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString: formatPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false,
                        text: 'Covid cases History'
                    }
                });
                var dataModel = new JSONModel(this.dataPath + "/history.covid.data.in.json");

                oVizFrame.setModel(dataModel);

                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

            },

            onPressList: function () {
                this.getOwnerComponent().getRouter().navTo("covid_list");
            },

            onPressGraph: function () {
                this.getOwnerComponent().getRouter().navTo("covid_pie")
            }

        });
    });
