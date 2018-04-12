import { LoaderService } from './../../services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckboxSelectionComponent } from './../selection-chkbox.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Component, OnInit } from '@angular/core';
import { WmtService } from '../../services/wmt.service';
import {TooltipModule} from 'primeng/tooltip';



@Component({
  selector: 'app-wmt',
  templateUrl: './wmt.component.html',
  styleUrls: ['./wmt.component.css']
})

export class WmtComponent implements OnInit {
  public wmtTable: any = [];
  public caseTable: any = [];
  public queryparams: any = {}
  public isDesc: boolean = false;
  public column: string = 'CategoryName';
  public direction: number;
  public header_details: any = [];
  public cashResp: any = [];
  public checkListParam: any = {};
  public checkedRow: any;
  public grade: any = [];
  memberValue: string;
  public hiddenTable:boolean;
  HeaderValue:string;
  public isActive:boolean;
  constructor(private route: ActivatedRoute, private wmtInstance: WmtService, private router: Router, private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.hiddenTable = false;
    this.isActive = false;
    //this.loaderService.display(true);
    this.getWmtTableDetails();
    this.grade = [
      { "value" : "All", "text" : "All Staff" },
      { "value" : "CM", "text" : "Cash Manager" },
      { "value" : "SCM", "text" : "Senior Cash Manger" }
    ];
    console.log(this.grade);
    this.memberValue = "All"
    this.HeaderValue="All Staff"
    //this.cashMangerDetails();
    //this.caseListDetails();
    //this.CaseDetails( this.checkListParam);

  }
  public getWmtTableDetails() {
    this.wmtInstance.getWmtBandTable().subscribe(response => {
      this.loaderService.display(false);
      //var header_data:any = [];
      response.map((obj, i) => {
        var tmp: any = {};
        for (let key in obj) {
          // header_data.push({"name":key, "prop":key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_").replace(/:/g,"")})
          tmp[key] = obj[key];
        }
        this.wmtTable.push(tmp);

      })

      // this.header_details=header_data;
      //console.log(this.wmtTable);

    });
  }
  // Get Cash List Details
  public caseListDetails(eventIndx) {
    var params;
    params = eventIndx;

    this.wmtInstance.getCaseList(params).subscribe(response => {
      this.hiddenTable = true;
      this.loaderService.display(false);
      var header_data: any = [];
      let k = 0
      response.map((obj, i) => {
        var tmp: any = {};
        
        for (let key in obj) {
          if (k == 0) {
            header_data.push({ "name": key, "prop": key.replace(/\)/g, "").replace(/\(/g, "").replace(/ /g, "_").replace(/:/g, "") })
            
          }
          
          tmp[key.replace(/\)/g, "").replace(/\(/g, "").replace(/ /g, "_").replace(/:/g, "")] = obj[key];

        }
       
          this.caseTable.push(tmp);
          k++;
      })

      this.header_details = header_data;
      console.log(this.caseTable, header_data);

    });
  }

  changeMember(value: string) {
    debugger;
    if(value=="All")
    {
      this.HeaderValue="All Staff"
    }
    else if(value=="CM"){
      this.HeaderValue="Cash Manager"
    
    }
   else if(value=="SCM"){
    this.HeaderValue=" Senior Cash Manager"
    
    }
    this.memberValue = value;
  }

  onRowSelect(event) {
    this.checkListParam.selectedValue = event.data.selectedValue;
    this.checkListParam.grade = this.memberValue;
    console.log(" this.checkListParam", this.checkListParam);
    //this.CaseDetails( this.checkListParam);
    this.caseListDetails(this.checkListParam);

  }

  // public CaseDetails(eventIndx){
  //   var params;
  //   params = eventIndx;
  //   this.wmtInstance.getCaseList(params).subscribe(response =>{
  //   this.checkedRow = response;
  //   console.log(this.checkedRow);
  //   })
  // }
  // public cashMangerDetails(){
  //   this.wmtInstance.getCashManager().subscribe(response =>{
  //     response.map((obj,i)=>{
  //       var tmp:any ={};
  //       for(let key in obj){
  //           tmp[key] = obj[key];
  //       }
  //       this.cashResp.push(tmp);   
  //     })
  //     console.log(this.cashResp);
  //   });
  // }

}
