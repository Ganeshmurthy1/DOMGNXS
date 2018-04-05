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
  public  getHeaders(type:any) {
    var token = JSON.parse(localStorage.getItem("Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndWVzdDEiLCJleHAiOjE1MjM3MTQ1Njl9.23RmgY1xPBtusAotguvdJOZ8jL4SmtOT6K_RyMvHTDRE1Sc8swRb1NYaOev4tESjBmsMRpTkAVFbfh_MPCFa-w"));
    //console.log(type)
    let authtoken = token;
    var head: any =  { 'preferenceDetails':1,
    //  'Content-Type': 'application/json', 
     'Content-Type': "application/x-www-form-urlencoded",     
     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndWVzdDEiLCJleHAiOjE1MjM3MTQ1Njl9.23RmgY1xPBtusAotguvdJOZ8jL4SmtOT6K_RyMvHTDRE1Sc8swRb1NYaOev4tESjBmsMRpTkAVFbfh_MPCFa-w '};
     switch(type) {
      case "form":
          head["Content-Type"] ="application/x-www-form-urlencoded"
          break;
      default:
        head["Content-Type"] ="application/json"
  }
  let headers = new Headers(head)
   return new RequestOptions({ headers: headers });
  }

}
