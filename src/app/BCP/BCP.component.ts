import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FlexmonsterPivot } from 'ng-flexmonster';
import * as Highcharts from 'highcharts';
import "node_modules/flexmonster/lib/flexmonster.highcharts.js";
import { HttpClient } from '@angular/common/http'
const button = document.querySelector('.nav-button');
const sidebar = document.querySelector('.sidebar');



declare var require: any;
const HC_map=require("/node_modules/highcharts/modules/map");
HC_map(Highcharts);
require("./js/usamap")(Highcharts);

@Component({
    selector: "app-BCP",
    templateUrl: "./BCP.component.html",
    styleUrls: ["./BCP.component.css", ]
})
  

export class BCPcomponent implements OnInit {
  @ViewChild("pivot") pivot!: FlexmonsterPivot; 
  url="assets/table.csv";
  constructor(private http:HttpClient){
   

  }
  
  rows:any;
  colname:any;
  rowdata:any[]=[];
  datarecieved!: Promise<boolean>;
  getCsv(){
    let obj=[];
    this.http.get(this.url,{responseType:'text'})
      .subscribe(
        (data:any)=>{
          
          this.rows = data.split("\n");
          // this.datarow=rows;
          this.colname = this.rows[0].split(",");
          console.log(this.rows)
          for(let row of this.rows.slice(1)){
          let tempdata=row.split(",");
             if(tempdata[2])
              tempdata[2]=tempdata[2].slice(0, -1);
            this.rowdata.push(tempdata);
          }
          this.datarecieved=Promise.resolve(true);
          
        }
      );
    console.log(this.rows);
  }
  customizeToolbar(toolbar: Flexmonster.Toolbar) {
    toolbar.showShareReportTab = true;
}

drawChart() {
    this.pivot.flexmonster.highcharts?.getData(
        {
            type: "column"
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
            {uniqueName: "Executing Practice"},
          
          ],
          column:[
            {uniqueName: "measures"}
          ],
          measures: [
            {uniqueName: "Project name"}
           
          ]
        // measures1: [
          
        
        ,options: {
            grid: {
              showGrandTotals: "columns",
            },
        }
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
