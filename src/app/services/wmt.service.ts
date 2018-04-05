
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {GlobalService} from './global.service'
import { Router } from '@angular/router';

@Injectable()
export class WmtService {

  constructor(private http: Http, private router: Router, private globalService: GlobalService) { }

  public getWmtTable(){
    return this.http.get(environment.baseUrl+"/wmt",  this.globalService.getHeaders('json')).map(res => res.json()).map((response: any) => {
      return response.data ? response.data : [];
    });
  }

}
