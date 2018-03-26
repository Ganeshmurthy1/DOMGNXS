import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  loginBlock:boolean;
  forgotEmail:FormGroup;
  constructor(private router:Router, private LoginInstance: LoginService, private fb: FormBuilder) {
    this.signinForm = fb.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required],
      'remember': [false] 
    });
    this.forgotEmail = fb.group({
      'email': [null,Validators.required],
    });
   }

  ngOnInit() {
    this.loginBlock = true;
    var rememberUser = JSON.parse(localStorage.getItem('rememberUser'));
    //console.log(rememberUser);
    if(rememberUser!=null){
       if(rememberUser.remember){
         this.signinForm.setValue(rememberUser);
       }
    }
  }

 

  loginUser(formData:any){
   //debugger;
    this.LoginInstance.login(formData.username,formData.password).subscribe(response => {
      let token = response.headers.get("Authorization");
    var loginResp=response;
    console.log("token",token);
    if (loginResp.responseStatus === 200){
      //debugger;
     this.router.navigate(['todo']);
    }else{
      var msg="check username and password";
      //this.router.navigate(['login']);
    }
    });
  }

}
