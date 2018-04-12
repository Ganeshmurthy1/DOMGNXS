
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {GlobalService} from './global.service'
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class WmtService {

  constructor(private http: Http, private router: Router, private globalService: GlobalService) { }

  public getWmtBandTable(){
    // var formData = new FormData();
    // formData.append("selectedValue", "1");
    // formData.append("multiSelect", "0");
    // formData.append("grade", "All");
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('selectedValue', "1");
    urlSearchParams.append('multiSelect', "0");
    urlSearchParams.append('grade', "All");
   
    return this.http.post(environment.baseUrl+"/wmt/Bands",urlSearchParams,  this.globalService.getHeaders('form')).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }
  //Get Case List Details
  public getCaseList(queryParams:any){
  
    // var formData = new FormData();
    // formData.append('selectedValue', "EventProvider='CPA CHESHIRE AND GTR MANCHESTER'");
    // formData.append('grade', "All");
    // console.log(formData)
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('selectedValue', queryParams.selectedValue);
    urlSearchParams.append('grade', queryParams.grade);
    
    return this.http.post(environment.baseUrl+"/wmt/caseList",urlSearchParams,  this.globalService.getHeaders("form")).map(res => res.json()).map((response: any) => {
     // debugger;
      return response.data ? response.data : [];
    });
  }
  // public getCashManager(){
  //   return this.http.get(environment.baseUrl+"/cm",  this.globalService.getHeaders('json')).map(res => res.json()).map((response: any) => {
  //     return response.data ? response.data : [];
  //   });
  // }
}
