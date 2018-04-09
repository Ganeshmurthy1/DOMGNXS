import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {GlobalService} from './global.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from 'underscore';
import { URLSearchParams } from '@angular/http';


@Injectable()
export class TodoService {
  responseStatus: number;
  responseData:any;
  groupCount: any = {};
 


  constructor(private http: Http, private router: Router, private globalService: GlobalService) { }

  public getOverAllTask(total_count:any){
    // let formData:any = {
    //   'preferenceDetails': 1,
    // }
    var formData = new FormData();
    formData.append('preferenceDetails', "1");
    return this.http.post(environment.baseUrl+"/toDo/getOverallTask",formData,  this.globalService.getHeaders("form")).map(res => res.json())
    .map((response: any) => {
        return response.data ? response.data : {};
   });
  }

  public getGroupCount(){
    
    //console.log("-----------------")
    var formData = new FormData();
    formData.append('preferenceDetails', "1");

    return this.http.post(environment.baseUrl+"/toDo/getGroupWiseCount",formData,  this.globalService.getHeaders("form")).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }

  public getFilterToDoList(){
    var queryParams = "1"
    return this.http.post(environment.baseUrl+"/toDo/groupFilterCounts",queryParams,  this.globalService.getHeaders("form")).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }

  public toDoTask(){ 
   // var queryParams = "1"
   //debugger;
   var formData = new FormData();
    formData.append('preferenceDetails', "1");
    
    return this.http.post(environment.baseUrl+"/toDo/getToDoTasks",formData,  this.globalService.getHeaders("form")).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }
  
  public toDoTableDetails(fileInfoId: number, count_data:string){
   // debugger;
   
    var formData = new FormData();
    formData.append('preferenceDetails', "1");
    // formData.append('sortColumnname', "1");
    // formData.append('sortOrder', "1");
    return this.http.post(environment.baseUrl+"/toDo/getToDoSheetRecords/"+fileInfoId+"/"+count_data,formData, this.globalService.getHeaders("json")).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }

  public toDoExportExcel(fileInfoId: number, count_data:string){
    debugger;
    var formData = new FormData();
    formData.append('preferenceDetails', "1");
     return window.location.href=environment.baseUrl+"/toDo/getToDoExporttoExcel/"+fileInfoId+"/"+count_data,formData, this.globalService.getHeaders("form")

    //return this.http.post(environment.baseUrl+"/toDo/getToDoExporttoExcel/"+fileInfoId+"/"+count_data, this.globalService.getHeaders("json"))
  }

  //for sorting table
  public toDoSortTable(fileInfoId: number, count_data:string, queryParams:any){
 // debugger;
    var formDataTable = new FormData();
    formDataTable.append('preferenceDetails', "1");
    // formData.append('sortColumnname', "1");
    // formData.append('sortOrder', "1");
    var query = "?"
   _.map(queryParams , (value:any, key:any)=> {
     query+= "&"+key+"="+value
   });
    return this.http.post(environment.baseUrl+"/toDo/sortRecords/"+fileInfoId+"/"+count_data+query,"preferenceDetails=1", this.globalService.getHeaders("form")).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }

// For Checked Count
  public toDoCheckedCount(queryParams:any){
   // debugger;
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('fileInfoId', queryParams.fileInfoId);
    urlSearchParams.append('FileId', queryParams.FileId);
    urlSearchParams.append('checkStatus', queryParams.checkStatus);
    return this.http.post(environment.baseUrl+"/toDo/saveCheckList",urlSearchParams, this.globalService.getHeaders("form")).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }

  private _serverError(err) {
    if (err.status === 401) {
      
      console.log(this.router)
      window.location.href = "login?expired=true";
      
      }
      else {
      console.log(err.json())
      return Observable.throw(err.json() || {});
      }
  }

}
