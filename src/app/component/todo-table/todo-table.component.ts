import { LoaderService } from './../../services/loader.service';
import { OrderPipe } from './../../directive/orderByPipe.directive';
import { TodoComponent } from './../todo/todo.component';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit, PipeTransform, Pipe, Directive } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import * as _ from 'underscore';
import { ToastrService } from 'ngx-toastr';
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
  public toRemoveCheckedList:any = [];
  checkListParam:any = {}
  selectedItems = [];
  public show:boolean;
  selected:any[]=[]
  public checkList:any = [];
  public hideEle:boolean;
  hiddenItems:any=[];
  tempData:any=[];
  constructor(private route: ActivatedRoute, private todoInstance: TodoService, private router:Router, private loaderService: LoaderService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loaderService.display(true);
    this.hideEle=false;
    // this.loaderService.display(true); 
    this.allowSelectAll = true;
    this.addBlock = true;
    //this.orgService.getOrgDetails(this.org_id).subscribe(response => {
      //this.orgDetails=response;
      //console.log(this.orgDetails);

    let sub = this.route.params.subscribe(params =>{
      // this.loaderService.display(true);
      this.file_Id=params.fileInfoId
      this.path=params.path
      this.loaderService.display(false); 
    });
   
    let flds = this.route.queryParams.subscribe(params =>{
      // this.loaderService.display(true);
      this.file_desc=params['desc'];
      this.loaderService.display(false); 
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
    
    this.getTodoListItem();
      
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
   this.loaderService.display(true);  
    this.todoInstance.toDoSortTable(this.file_Id,this.path, this.queryparams).subscribe(response =>{
     
      var header_data:any = [];
    
     this.tableDetails = [];
      response.map((obj,i)=>{
        //debugger;
       //console.log("outer",obj)
        var tmp:any ={};
       
        for(let key in obj){
         
            if(i==0)
              header_data.push({"name":key, "prop":key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_").replace(/:/g,"")})
            tmp[key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_").replace(/:/g,"")] = obj[key];
         // }          
        }
        //if(Object.keys(tmp).length > 0){
         // console.log("data",this.tableDetails);
          //if(this.tableDetails.CheckedStatus != 0)
          this.selected.push(tmp);
          
          
       // }
        //console.log( this.tableDetails);
      })
     // debugger;
      this.tableDetails=JSON.parse(JSON.stringify(this.selected))
      for (let i = 0; i < this.tableDetails.length; i++) { 
        if(this.tableDetails[i].CheckedStatus=="1"){
          this.tableDetails[i].CheckedStatus=true;
          
        }
        else{
          this.tableDetails[i].CheckedStatus=false;
        }
    }
      this.tempData=this.tableDetails;
      this.header_details=header_data;
     this.loaderService.display(false);
    });
  }

  public getExportExcel(file_Id){
    this.todoInstance.toDoExportExcel(file_Id, this.path);
  }
 
//   public hightlightRow(keys: any, index: number) {
//     return rowData.LeadTimeRemaining + '-hightliting';
// }

  //hide selected Checked Records
  public hideCheckedRow(){
    debugger;
    if(!this.hideEle){
      // this.checkList.forEach(evet=>{
      //   this.tableDetails.forEach((keys : any,index) => {
      //     // id= keys.Id
      //         if(evet == keys.Id){
      //           console.log("splice",index,'-',keys.Id);
      //           this.hiddenItems.push( this.tableDetails[index])
      //           var x =    this.tableDetails.splice(index, 1); 
      //           console.log("spliced",this.tableDetails);
      //         }
           
      //      })
      //     })
      var tmp=this.tableDetails
      // for (let i = 0; i >tmp.length;  i++) { 
      //   if(this.tableDetails[i].CheckedStatus == false){
      //     console.log(i);
      //     this.selected[i].CheckedStatus=false;
      //     this.tableDetails.splice(i, 1); 
      //   }
      // }
      this.tableDetails= this.tableDetails.filter(val=>
        val.CheckedStatus==false)
        console.log(this.tableDetails)
    }
    else{
      this.tableDetails= this.tempData
    }
    
    this.hideEle=! this.hideEle
  
    
  }

  onRowSelectd(evet){
    //console.log("evet",evet.data.Id);
    this.checkListParam.fileInfoId = this.file_Id;
    this.checkListParam.FileId = evet.Id;
    this.checkListParam.checkStatus = evet.CheckedStatus;
    //this.style.backgroundColor = '#000000';  

   // console.log("evet",evet);
    this.checkList.push(evet.Id)
   // console.log(" this.checkListParam", this.checkListParam);
    this.getRowCheckStatus( this.checkListParam);
    this.toRemoveCheckedList.push(evet.Id);

  }
  onRowUnselected(unEvent, index){
    this.checkListParam.fileInfoId = this.file_Id;
    this.checkListParam.FileId = unEvent.data.Id;
    this.checkListParam.checkStatus = "0";
    this.getRowCheckStatus( this.checkListParam);
    //console.log("unEvent",unEvent);
  }

  public getRowCheckStatus(eventIndx){
    var params;
  
     params = eventIndx;
     if(params.checkStatus==true){
      params.checkStatus="1"
    }
    else{
      params.checkStatus="0"
    }
    //debugger;
    this.todoInstance.toDoCheckedCount(params).subscribe(response =>{
      this.checkedCount = response;
    //  console.log(response);
      //check respionse status , if it 200 , success 
      


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
public highlightRow(rowData){

  return rowData.CheckedStatus ? 'disabled' : ''
}
 
public dblclick(data)
{

    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    if(data.data.CRN_Event_No == undefined){
      var crn_box =  data.data.CRN.split(" ")[0];
      selBox.value = crn_box
    }else{
      var new_box = data.data.CRN_Event_No.split(" ")[0].search(":");
      selBox.value = data.data.CRN_Event_No.split(" ")[0].slice(0,new_box);
      //console.log(selBox.value);
    }
    

   // console.log(selBox.value);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.success(selBox.value,"CRN Number Copied:", {timeOut: 500});
}

}
