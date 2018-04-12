import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
 
@Component({
  selector: 'app-stacked-vertical-chart',
  templateUrl: './stacked-vertical-chart.component.html',
  styleUrls: ['./stacked-vertical-chart.component.css']
})
export class StackedVerticalChartComponent implements OnInit {
 
 chartDataNGX:any = [];
  
 
  // options
  view: any[] = [600, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    this.getChatrtData();
   }

  ngOnInit() {
    
  }
  getChatrtData(){
    this.chartDataNGX.push(
      {"name": "TEST","series":[{"name": "Target","value": 40632},{"name": "Actual","value": 36783}, {"name": "Projected","value": 31476}]},
      {"name": "TEST1","series": [{"name": "Target","value": 40632},{"name": "Actual","value": 36953}, {"name": "Projected","value": 31476},{"name": "supplier","value": 31476}]},
      {"name": "TEST2","series": [{"name": "Target","value": 40632},{"name": "Actual","value": 36953}, {"name": "Projected","value": 31476},{"name": "supplier","value": 31476}]},
      {"name": "TEST3","series": [{"name": "Target","value": 40632},{"name": "Actual","value": 36953}, {"name": "Projected","value": 31476},{"name": "supplier","value": 31476}]},
      {"name": "TEST4","series": [{"name": "Target","value": 40632},{"name": "Actual","value": 36953}, {"name": "Projected","value": 31476},{"name": "supplier","value": 31476}]}
      );
  }
  onSelect(event) {
    console.log(event);
  }
}
