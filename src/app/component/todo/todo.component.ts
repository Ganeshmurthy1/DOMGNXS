import { LoaderService } from './../../services/loader.service';
import { Response } from '@angular/http';
import { TodoTableComponent } from './../todo-table/todo-table.component';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import * as _ from 'underscore';
import { BsModalService } from 'ngx-bootstrap/modal';
//import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GlobalPreferenceModalComponent } from '../../component/global-preference-modal/global-preference-modal.component';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public modalRef: BsModalRef;
  total_cnt:number;
  public totalCount: any = null; 
  public time_duration: any = "allCount"; 
  public risk_factor: any = "allCount"; 
  public groupCount: any = {};
  public allTasks: any = {};
  public taskResp:any = [];
  public taskDetails:any = {};
  public taskFilterDetails:any = [];

  public riskBlock:boolean;
  public timeCount:any = "0";
  public interCount: any = "0";
  public allTasksInfo:any = {}


  // public dayCount:boolean;
  // public weekCount:boolean;
  // public dueCount:boolean;
  // public overAllCount:boolean;
  // public overAllGroupCount:boolean;

  
  
  public infoGroupCount:number;
  public heteGroupCount:number;
  public outGroupCount:number;
  LoginDetails:any;
  // public fileInfoId: number;
  // public tableDetails: any = {};
  
  constructor(private router: Router, private todoInstance: TodoService, private loaderService: LoaderService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.loaderService.display(true);
    this.riskBlock = true;
    this.LoginDetails = JSON.parse(localStorage.getItem('LoginDetails'));  
   
    if(this.LoginDetails != null){
      this.getAllTasks();
      this.gettoDoTask();
      this.getGroupDefaultCount();
      this.loaderService.display(true);
   //this.getOneDayCount();
  
    }else{
      this.loaderService.display(false);
      this.router.navigate(['login']);
    }
    
    
  }


  getAllTasks() {
    
    this.todoInstance.getOverAllTask('allCount').subscribe(response =>{
      this.loaderService.display(true);
      var obj={}
      _.map(response, function(value, key ){ 
        obj[key.toLowerCase()] =value;      
      });
      this.allTasksInfo=obj
      this.totalCount = this.allTasksInfo.allcount
      this.loaderService.display(false);
    });
  }

  // getfilterTodo(filter){
  //   this.todoInstance.toDoTableDetails(14, filter).subscribe(response =>{
  //     console.log(response)
  //   })
  // }

  

  getGroupDefaultCount() {
    this.loaderService.display(true);
    this.todoInstance.getGroupCount().subscribe(response =>{
      
      var tmp:any ={}
      response.map((obj,i)=>{
        tmp[obj.groupName.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_")] = obj;
      })

      this.groupCount=tmp
      //console.log(this.groupCount);
      //Time Sensitive filters Count
     // this.overAllGroupCount=true;
      //this.allRiskCount = true;
      this.timeCount=this.groupCount.To_Do_List_Time_Sensitive.allCount
      this.interCount=this.groupCount.To_Do_List_Interventions.allCount
      // this.timeGroupCount = this.groupCount.To_Do_List_Time_Sensitive.allCount;
      // this.timeOneDayCount =  this.groupCount.To_Do_List_Time_Sensitive.oneDayCount;
      // this.timeOneWeekCount =  this.groupCount.To_Do_List_Time_Sensitive.oneWeekCount;
      // this.timeDueCount =  this.groupCount.To_Do_List_Time_Sensitive.overDueCount;
      
      //Interventions filters Count
      // this.interGroupCount = this.groupCount.To_Do_List_Interventions.allCount;
      // this.interLowRiskCount =  this.groupCount.To_Do_List_Interventions.lowRiskCount;
      // this.interHighRiskCount =  this.groupCount.To_Do_List_Interventions.highRiskCount;
      // this.interFailingCount =  this.groupCount.To_Do_List_Interventions.failingCount;
      
      //Informational Group Count
      this.infoGroupCount = this.groupCount.To_Do_List_Informational.allCount;
      
      //HETE Gruup Count
      this.heteGroupCount = this.groupCount.To_Do_List_HETE_and_Curfew.allCount;
      //Outstanding Group Count
      this.outGroupCount = this.groupCount.OutStanding_Pending_Transfer.allCount;
      this.loaderService.display(false);
    });

}

gettoDoTask() {
  this.loaderService.display(true);
this.todoInstance.toDoTask().subscribe(response =>{
  //this.loaderService.display(false);
  var tmp={}
  for(let key in response){
    //console.log(key, response[key])
    tmp[key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_")] = response[key]
  }
  this.taskDetails=tmp
  //console.log(this.taskDetails);
 });
} 


//Get Filter data for Time and Interventions
getFilterdata(filter,type){
  this.todoInstance.getFilterToDoList().subscribe(response =>{
    this.loaderService.display(false);
    if(type == 'TimeSensitiveCounts'){
      response.TimeSensitiveCounts = _.map(response.TimeSensitiveCounts, function(obj){ obj["recordCount"]= obj[filter]; return obj});
      this.taskDetails.To_Do_List_Time_Sensitive=response.TimeSensitiveCounts
      this.timeCount=this.groupCount.To_Do_List_Time_Sensitive[filter]
      this.time_duration=filter
    }      
    else{
      response.InterventionsCounts= _.map(response.InterventionsCounts, function(obj){ obj["recordCount"]= obj[filter]; return obj });
      this.taskDetails.To_Do_List_Interventions=response.InterventionsCounts
      this.interCount=this.groupCount.To_Do_List_Interventions[filter]
      this.risk_factor=filter
    }
    this.totalCount = this.allTasksInfo[filter.toLowerCase()]
   });
}

// getOneDayCount() {
// this.todoInstance.getGroupCount().subscribe(response =>{
//   var tmp=[]
//   for(let key in response){
    
//     tmp[key.replace(/\)/g,"").replace(/\(/g,"").replace(/ /g,"_")] = response[key]
//   }
//   this.taskFilterDetails=tmp
//  });
// }

openConfirmDialog() {
  this.modalRef = this.modalService.show(GlobalPreferenceModalComponent);
  // this.modalRef.content.onClose.subscribe(result => {
  //     console.log('results', result);
  // })
}

}
