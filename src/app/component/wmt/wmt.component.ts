import { LoaderService } from './../../services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckboxSelectionComponent } from './../selection-chkbox.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Component, OnInit } from '@angular/core';
import { WmtService } from '../../services/wmt.service';



@Component({
  selector: 'app-wmt',
  templateUrl: './wmt.component.html',
  styleUrls: ['./wmt.component.css']
})

export class WmtComponent implements OnInit {
  
  public wmtTable: any = [];
  public queryparams:any = {}
  public isDesc: boolean = false;
  public column: string = 'CategoryName';
  public direction: number;
  cars=[]
  public header_details:any = [];
  constructor(private route: ActivatedRoute, private wmtInstance: WmtService, private router:Router, private loaderService: LoaderService) { 
   
  }

  ngOnInit() {
    
  this.getWmtTableDetails();


    
    
  }
  public getWmtTableDetails(){
    this.wmtInstance.getWmtTable().subscribe(response =>{
      this.loaderService.display(false);
      var header_data:any = [];
      response.map((obj,i)=>{
        var tmp:any ={};
        for(let key in obj){
          header_data.push({"name":key, "prop":key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_").replace(/:/g,"")})
            tmp[key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_").replace(/:/g,"")] = obj[key];
        }
        this.wmtTable.push(tmp);
        
      })
    
      this.header_details=header_data;
      console.log(this.wmtTable);
     
    });
  }


  // public getSortDetails(property){
  
  //   this.isDesc = !this.isDesc; 
  //   this.direction = this.isDesc ? 1 : -1;    
  //   this.queryparams.sortOrder =  this.isDesc ? "desc" : "asc"
  //   this.queryparams.sortColumnname =  property
  //   this.getWmtTableDetails();
  //   }

}
