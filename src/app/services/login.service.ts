import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  responseStatus: number;
  constructor(private http: Http) { }

  public login(username: string, password: string){
   //debugger;
    let envUrl = environment.baseUrl;
    let formData = {
      'username': username,
      'password': password
    }
    //this accesses the API
    return this.http.post(envUrl+"/login",formData).map((response: Response, headers: any) => {
      // debugger;
     // let user = response.json();
     //console.log(user);
     // user.responseStatus = response.status;
      //console.log( response.status);
      return response;

    });
  }
}
