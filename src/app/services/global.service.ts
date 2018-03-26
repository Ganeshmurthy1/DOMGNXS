import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class GlobalService {
  constructor( private cookieService: CookieService) { }  
  public getHeaders(){
    // debugger;
    // var currentUser = JSON.parse(localStorage.getItem(currentUser));
    // 'withcredentials' : true, 'Authorization':  this.cookieService.get("JSESSIONID")
    let headers = new Headers({'Content-Type': 'application/json'});
    // let authtoken = currentUser.access_token;
    // if(authtoken){
    //   headers["Authorization"] = authtoken
    // }
    return new RequestOptions({headers: headers});
  }


}
