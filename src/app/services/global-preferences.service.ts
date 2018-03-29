import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {GlobalService} from './global.service'
import { Router } from '@angular/router';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GlobalPreferencesService {

  constructor(private http: Http, private router: Router, private globalService: GlobalService) { }
 

  public getGlobalPreferences(){
    return this.http.get(environment.baseUrl+'/preferences/getGlobalPreferences',this.globalService.getHeaders()).map(res => res.json()).map((response:any)=>{
      return response.data ? response.data : [];
    })
  }
}
