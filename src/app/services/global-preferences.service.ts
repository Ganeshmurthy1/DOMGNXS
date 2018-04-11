import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {GlobalService} from './global.service'
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GlobalPreferencesService {

  constructor(private http: Http, private router: Router, private globalService: GlobalService) { }
 

  public getGlobalPreferences(){
    return this.http.get(environment.baseUrl+'/preferences/getGlobalPreferences',this.globalService.getHeaders('json')).map(res => res.json()).map((response:any)=>{
      return response.data ? response.data : [];
    })
  }

  public toSaveGlobalPreferences(globData){    
    const body = new HttpParams()
    .set('preferenceDetails', globData)
    
    return this.http.post(environment.baseUrl+"/preferences/saveGlobalPreferences", body.toString(), this.globalService.getHeaders("form"))
     .map(res => res.json()).map((response: any) => {
       return response.data ? response.data : [];
     });
   }
}
