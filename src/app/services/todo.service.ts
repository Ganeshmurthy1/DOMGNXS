import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {GlobalService} from './global.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoService {
  responseStatus: number;
  responseData:any;
  groupCount: any = {};


  constructor(private http: Http, private router: Router, private globalService: GlobalService) { }

  public getOverAllTask(total_count:any){
    return this.http.get(environment.baseUrl+"/toDo/getOverallTask",  this.globalService.getHeaders()).map(res => res.json())
    .map((response: any) => {
        return response.data ? response.data : {};
   });
  }

  public getGroupCount(){
    
    console.log("-----------------")
    return this.http.get(environment.baseUrl+"/toDo/getGroupWiseCount",  this.globalService.getHeaders()).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }

  public getFilterToDoList(){
    return this.http.get(environment.baseUrl+"/toDo/groupFilterCounts",  this.globalService.getHeaders()).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }

  public toDoTask(){ 
    
    return this.http.get(environment.baseUrl+"/toDo/getToDoTasks",  this.globalService.getHeaders()).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }
  
  public toDoTableDetails(fileInfoId: number, count_data:string){
    
    return this.http.get(environment.baseUrl+"/toDo/getToDoSheetRecords/"+fileInfoId+"/"+count_data, this.globalService.getHeaders()).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }

  public toDoExportExcel(fileInfoId: number){
    return window.location.href=environment.baseUrl+"/toDo/getToDoExporttoExcel/"+fileInfoId
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
