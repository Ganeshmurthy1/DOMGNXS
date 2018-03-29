import { Component, OnInit } from '@angular/core';
import { GlobalPreferencesService } from '../../services/global-preferences.service';
import { LoaderService } from './../../services/loader.service';
import { Response } from '@angular/http';
import { Router} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-global-preference',
  templateUrl: './global-preference.component.html',
  styleUrls: ['./global-preference.component.css']
})
export class GlobalPreferenceComponent implements OnInit {
  allData: any;
  providers:any;
  LoginDetails:any;
  constructor(private router: Router, private globalPreferService: GlobalPreferencesService, private loaderService: LoaderService,
  private modalService: BsModalService) { }

  ngOnInit() {
   // this.loaderService.display(true);
    this.LoginDetails = JSON.parse(localStorage.getItem('LoginDetails'));  
   
    if(this.LoginDetails != null){
      this.getAllGlobalPreferences();
      
    }else{
      //this.loaderService.display(false);
      this.router.navigate(['login']);
    }
    
  }

  getAllGlobalPreferences(){
 
    this.globalPreferService.getGlobalPreferences().subscribe(response =>{
     // this.loaderService.display(false);
     console.log("response",response);
      this.allData = response.Preferences;
      this.providers = this.allData.EventProviders;
      console.log("this.providers",this.providers);
    })
  }
}
