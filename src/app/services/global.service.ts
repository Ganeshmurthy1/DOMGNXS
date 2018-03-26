import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class GlobalService {
  constructor( private cookieService: CookieService) { }  
  // public getHeaders(){
  //   // debugger;
  //   // var currentUser = JSON.parse(localStorage.getItem(currentUser));
  //   let headers = new Headers({'Content-Type': 'application/json', 'withcredentials' : true, 'Authorization':  this.cookieService.get("JSESSIONID")});
  //   // let authtoken = currentUser.access_token;
  //   // if(authtoken){
  //   //   headers["Authorization"] = authtoken
  //   // }
  //   return new RequestOptions({headers: headers});
  // }
  public  getHeaders() {
    var token = JSON.parse(localStorage.getItem("token"));
    
    let authtoken = token;
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': authtoken });
    
   return new RequestOptions({ headers: headers });
  }

}
