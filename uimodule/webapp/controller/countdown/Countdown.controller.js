sap.ui.define([
    "../BaseController",
    "sap/ui/model/json/JSONModel"
],

    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("local.myUI5App.controller.countdown.Countdown", {
            
            onInit: function () {                

                //let myTimer = this.calculateTime() ;

                this.myTimer = {"days":0, "hours":0, "minutes":0, "seconds":0};
                
                const mytilesModel = new JSONModel(this.myTimer);                
                this.getView().setModel(mytilesModel, "timerModel");

                setInterval(this.calculateTime.bind(this), 1000);
                
            },

            onPress: function (oRoute) {
                alert("Hello " + oRoute);
            },

            calculateTime: function () {
                const currentDate = new Date();
                const xmasDay = new Date("Dec 24 " + currentDate.getFullYear().toString() );                
                const diff = xmasDay.getTime() - currentDate.getTime();

                const timer = {
                    "days"      : Math.floor(diff / ( 1000 * 60 * 60 * 24 )),
                    "hours"     : Math.floor((diff % ( 1000 * 60 * 60 * 24 )) / ( 1000 * 60 * 60 )),
                    "minutes"   : Math.floor((diff % ( 1000 * 60 * 60 ))/ ( 1000 * 60  ) ),
                    "seconds"   : Math.floor((diff % ( 1000 * 60  ))/ ( 1000  ) )
                };

                this.getView().getModel("timerModel").setData(timer);
                
            }
        });
    });
