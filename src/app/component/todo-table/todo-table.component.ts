import { LoaderService } from './../../services/loader.service';
import { OrderPipe } from './../../directive/orderByPipe.directive';
import { TodoComponent } from './../todo/todo.component';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit, PipeTransform, Pipe, Directive } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
//import { DataTableResource } from 'angular-4-data-table-bootstrap-4';

//import _ from 'underscore';
import * as _ from 'underscore';
//import { reverse } from 'dns';
declare var jquery:any;
declare var $ :any;
//import{PipeTransform}
//import { ActivatedRoute } from '@angular/router/src/router_state';
//import { TableDetailsDirective, Pipe } from '@angular/core';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
@Directive({
  selector:'appTableDetails'
})
//@Pipe({name: 'keys'})
export class TodoTableComponent implements OnInit {
  public file_Id: number;
  public path: any = null;
  public file_desc: string;
  public count_type:string;
  public check_id:any;
  public addBlock:boolean;
  public tableDetails: any = null;
  public header_details:any = [];
  public export:any = [];
  display='none';
  public check:boolean=true;
  public queryparams:any = {}
  public isDesc: boolean = false;
  public column: string = 'CategoryName';
  public direction: number;
  public allowSelectAll:boolean;
  public checkedCount: any;  
  public fileInfo:any;
  public fileId:any;
  checkListParam:any = {}
  selectedItems = [];
  public  hidden:boolean = false;

  constructor(private route: ActivatedRoute, private todoInstance: TodoService, private router:Router, private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.display(true); 
    this.allowSelectAll = true;
    this.addBlock = true;
    //this.orgService.getOrgDetails(this.org_id).subscribe(response => {
      //this.orgDetails=response;
      //console.log(this.orgDetails);

    let sub = this.route.params.subscribe(params =>{
      this.loaderService.display(false);
      this.file_Id=params.fileInfoId
      this.path=params.path
    });
   
    let flds = this.route.queryParams.subscribe(params =>{
      this.loaderService.display(false);
      //debugger;
      this.file_desc=params['desc'];
      });

      // let allCnt = this.route.queryParams.subscribe(params =>{
      //   debugger;
      //   this.count_type=params['countType'];
      //  console.log(this.count_type);
      //   });

      // let checkRecord = this.route.queryParams.subscribe(params =>{
      //   this.check_id=params['toDoCheck'];
      //   console.log(this.check_id);
      //   });
    //let sub1 = this.route.queryParams.subscribe(params =>this.usrnm=params.username)
    
    this.getTodoListItem()
      
  }

  // public checkingField(indx){
  //  var newIndex = indx + 1;
  //   if( $('#first-row'+newIndex).hasClass('disableColor')){
  //     $('#first-row'+newIndex).removeClass('disableColor');
  //     $('#content-checkbox-'+newIndex).attr('checked', false);
  //   }else{
  //     $('#first-row'+newIndex).addClass('disableColor');
  //     $('#content-checkbox-'+newIndex).attr('checked', true);
  //   }
    
    
  // }

  // public getTodoListItem(){
  //   this.loaderService.display(true); 
  //   this.todoInstance.toDoSortTable(this.file_Id,this.path, this.queryparams).subscribe(response =>{  
  //     var header_data:any = [];
  //    this.tableDetails = [];
  //     response.map((obj,i)=>{
  //       var tmp:any ={};
  //       for(let key in obj){
  //         if(i==0)
  //           header_data.push(key)
  //           tmp[key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_").replace(/:/g,"")] = obj[key];
  //       }
  //       this.tableDetails.push(tmp);
  //     })
  //    console.log(this.tableDetails);
  //     this.header_details=header_data;
  //     this.loaderService.display(false);
  //   });
  // }

  public getTodoListItem(){
    //debugger;
    this.todoInstance.toDoSortTable(this.file_Id,this.path, this.queryparams).subscribe(response =>{
      this.loaderService.display(false);  
      var header_data:any = [];
    
     this.tableDetails = [];
      response.map((obj,i)=>{
        //debugger;
        var tmp:any ={};
        for(let key in obj){
          console.log(obj.CheckedStatus == "0")
          if(obj.CheckedStatus == "0"){
            if(i==0)
              header_data.push({"name":key, "prop":key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_").replace(/:/g,"")})
            tmp[key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_").replace(/:/g,"")] = obj[key];
          }          
        }
        if(Object.keys(tmp).length > 0)
         this.tableDetails.push(tmp);
      })
     //console.log(header_data,this.tableDetails);
      this.header_details=header_data;
      this.loaderService.display(false);
    });
  }




  public getExportExcel(file_Id){
    this.todoInstance.toDoExportExcel(file_Id, this.path);
  }
  //hide selected Checked Records
  public getCheckedRecord(){
    debugger;
  //   this.selectedItems.forEach(function(list) {
  //     const index = this.tableDetails.indexOf(list);
  //     this.tableDetails.splice(index, 1);
  // });
   
    this.checkListParam.checkStatus = "1";


    this.tableDetails = _.filter(this.tableDetails, function(obj:any){ return !obj.isChecked});
     console.log(this.tableDetails);
  }

  onRowSelectd(evet){
    this.checkListParam.fileInfoId = this.file_Id;
    this.checkListParam.FileId = evet.data.Id;
    this.checkListParam.checkStatus = "1";

    //console.log("evet",evet);
    console.log(" this.checkListParam", this.checkListParam);
     this.getRowCheckStatus( this.checkListParam);


  }
  onRowUnselected(unEvent){
    this.checkListParam.fileInfoId = this.file_Id;
    this.checkListParam.FileId = unEvent.data.Id;
    this.checkListParam.checkStatus = "0";
    this.getRowCheckStatus( this.checkListParam);
    //console.log("unEvent",unEvent);
  }

  public getRowCheckStatus(eventIndx){
    var params;
     params = eventIndx;
    //debugger;
    this.todoInstance.toDoCheckedCount(params).subscribe(response =>{
      this.checkedCount = response;
      //console.log("checkedresponse",this.checkedCount);
    })
  }

 public getSortDetails(property){    
  this.isDesc = !this.isDesc; //change the direction    
    // this.column = property.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_").replace(/:/g,"");
    this.direction = this.isDesc ? 1 : -1;  
    this.queryparams.sortOrder =  this.isDesc ? "desc" : "asc"
    this.queryparams.sortColumnname =  property
    this.getTodoListItem()
  }
  
  
}
