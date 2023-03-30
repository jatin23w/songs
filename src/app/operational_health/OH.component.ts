import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FlexmonsterPivot } from 'ng-flexmonster';
import * as Highcharts from 'highcharts';
import "node_modules/flexmonster/lib/flexmonster.highcharts.js";

const button = document.querySelector('.nav-button');
const sidebar = document.querySelector('.sidebar');


declare var require: any;
const HC_map=require("/node_modules/highcharts/modules/map");
HC_map(Highcharts);
require("./js/usamap")(Highcharts);

@Component({
    selector: "app-OH",
    templateUrl: "./OH.component.html",
    styleUrls: ["./OH.component.css", ]
})
  

export class OHcomponent implements OnInit {
  @ViewChild("pivot") pivot!: FlexmonsterPivot;
 
  


  customizeToolbar(toolbar: Flexmonster.Toolbar) {
    toolbar.showShareReportTab = true;
}

drawChart() {
    this.pivot.flexmonster.highcharts?.getData(
        {
            type: "grid"
        },
        (data: Flexmonster.GetDataValueObject) => {
            Highcharts.chart('highcharts-container', <Highcharts.Options>data);
        },
        (data: Flexmonster.GetDataValueObject) => {
            Highcharts.chart('highcharts-container', <Highcharts.Options>data);
        }
    );
}

onReportComplete() {
    this.pivot.flexmonster.off("reportcomplete");
    this.drawChart();
}

    public pivotReport = {
        dataSource: {
            filename: ""
        },
        // mapping: {
        //     "month": {
        //         caption: "Month",
        //         type: String
        //     },
        //    
        //     "Total Cost": {
        //         caption: "Total Cost",
        //         type: String
        //     },
        //     "variance": {
        //         caption: "variance",
        //         type: String
        //     }
        // },
        // formats: {
        //   name: "",
        //   currencySymbol: "$",
        //   decimalPlaces: 2
        // },
        slice: {
          rows: [
            {uniqueName: "State"},
          
          ],
          column:[
            {uniqueName: "measures"}
          ],
          measures: [
            {uniqueName: "Count of Work Item Id", aggregation: "sum"}
           
          ]
        // measures1: [
          
        // ]
        // options: {
        //     // grid: {
        //     //   showGrandTotals: "columns",
        //     // },
        // }
        }
      }
      public theme: Highcharts.Options = {
        colors: ["#00A45A", "#DF3800", "#FFB800", "#6D3BD8", "#0075FF"],
        chart: {},
        title: {
          style: {
            color: "#000",
            font: 'bold 16px "Roboto", sans-serif',
          },
        },
        subtitle: {
          style: {
            color: "#666666",
            font: 'bold 12px "Roboto", sans-serif',
          },
        },
        legend: {
          itemStyle: {
            font: '9pt "Roboto", sans-serif',
            color: "black",
          },
          itemHoverStyle: {
            color: "gray",
          },
        },
      };

    ngOnInit(): void { 
         Highcharts.setOptions(this.theme);
    }
    
}
