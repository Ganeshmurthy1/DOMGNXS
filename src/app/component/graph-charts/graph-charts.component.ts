import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-charts',
  templateUrl: './graph-charts.component.html',
  styleUrls: ['./graph-charts.component.css']
})
export class GraphChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 65, 90, 25, 45, 55, 40, 90],
    [28, 48, 40, 19, 86, 15, 45, 27, 65, 95, 90, 100]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  public lineChartType:string = 'line';
 // public pieChartType:string = 'pie';
 
  // Pie
  // public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  // public pieChartData:number[] = [300, 500, 100];
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    console.log("this.lineChartType",this.lineChartType);
    //this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
