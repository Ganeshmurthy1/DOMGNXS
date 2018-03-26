import { LoaderService } from './../../services/loader.service';
import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
import { GlobalService } from '../../services/global.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  loginBlock:boolean;
  forgotEmail:FormGroup;
  logData:any;
  constructor( private router:Router, private LoginInstance: LoginService, private fb: FormBuilder, private loaderService: LoaderService,private toastr: ToastrService) {
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
    this.loaderService.display(false);
    this.loginBlock = true;
    // var rememberUser = JSON.parse(localStorage.getItem('rememberUser'));
    
    // if(rememberUser!=null){
    //    if(rememberUser.remember){
    //      this.signinForm.setValue(rememberUser);
    //    }
    // }
    localStorage.clear();
  }
  showSuccess() {
    this.toastr.success('Successfully logged In');
  }
  showErrorFlash(){
    this.toastr.error('Please Enter Proper Credentials');
  }
  loginUser(formData:any){
  
    this.LoginInstance.login(formData.username,formData.password).subscribe(response => {
    
    // if (response.responseStatus == 200){
    //   var loginResp=response;
  
       
    //  // localStorage.setItem('LoginDetails', JSON.stringify(loginResp));
    //    this.logData = { userName:"Ganesh murthy",Token:"asdfghjklqwertyuiop"};
    //  localStorage.setItem('LoginDetails',JSON.stringify(this.logData));
     
    //  this.router.navigate(['todo']);
    // }else{
    //   var msg="check username and password";
    //   this.router.navigate(['login']);
    // }

    if(response.status == 200){
      var loginResp=response;   
        let token = response.headers.get("Authorization");         
       localStorage.setItem("token",JSON.stringify(token));     
       localStorage.setItem("LoginDetails",JSON.stringify(loginResp));
      this.router.navigate(['todo']);
      this.showSuccess();
    } 
    else{
        this.router.navigate(['login']);
    }
    
    },err => {
       
      this.showErrorFlash();
      
   });
  }
  
}
