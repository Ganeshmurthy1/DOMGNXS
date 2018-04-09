// import { Component, OnInit } from '@angular/core';
// import { GlobalPreferencesService } from '../../services/global-preferences.service';
// import { LoaderService } from './../../services/loader.service';
// import { Response } from '@angular/http';
// import { Router} from '@angular/router';
// import { BsModalService } from 'ngx-bootstrap/modal';
// declare var $: any;
// @Component({
//   selector: 'app-global-preference',
//   templateUrl: './global-preference.component.html',
//   styleUrls: ['./global-preference.component.css']
// })
// export class GlobalPreferenceComponent implements OnInit {
//   allData: any;
//   providers:any;
//   LoginDetails:any;
//   AllprovidersTemp:any;
//    Allproviders:any = [];
//   prop:any;
//   constructor(private router: Router, private globalPreferService: GlobalPreferencesService, private loaderService: LoaderService,
//   private modalService: BsModalService) { }

//   ngOnInit() {
//    // this.loaderService.display(true);
//     this.LoginDetails = JSON.parse(localStorage.getItem('LoginDetails'));  
   
//     if(this.LoginDetails != null){
//       this.getAllGlobalPreferences();
      
//     }else{
//       //this.loaderService.display(false);
//       this.router.navigate(['login']);
//     }    
//   }
//   getAllGlobalPreferences(){
 
//     this.globalPreferService.getGlobalPreferences().subscribe(response =>{
//      // this.loaderService.display(false);
//      console.log("response",response);
//      console.log("this.providers",this.providers);
//       this.allData = response.Preferences;
//       this.providers = this.allData.EventProviders; 
//     })
//   }

  
// }

import { Component, OnInit, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { GlobalPreferencesService } from '../../services/global-preferences.service';
import { LoaderService } from './../../services/loader.service';
import { Response } from '@angular/http';
import { Router} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal'; 
declare var $: any;

 

@Component({
  selector: 'app-global-preference',
  templateUrl: './global-preference.component.html',
  styleUrls: ['./global-preference.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class GlobalPreferenceComponent implements OnInit {
   

  allData: any;
  providers:any;
  LoginDetails:any;
  allEventCluster:any;
  allEventLDUS:any;
  allEventManagers:any;
  allEventTeams:any;
   sortedClusterArray:any = [];
   sortedLdusArray:any = [];
   sortedTeamList:any = [];
   sortedManagerList:any = [];
   showHide: boolean;
  prop:any;
  public indx:any = null;
  public jIndx:any = null;
  public kIndx:any = null;
  public tIndx:any = null;
  public mIndx:any = null;
  constructor(private router: Router, private globalPreferService: GlobalPreferencesService, private loaderService: LoaderService,
  private modalService: BsModalService) { 
     
 
  }
  showId = false;
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

//   ngAfterViewInit(){
//     setTimeout(()=>{     
 
//     });
//  },3000);    
   

//     }

  getAllGlobalPreferences(){
 
    this.globalPreferService.getGlobalPreferences().subscribe(response =>{
     // this.loaderService.display(false);
 
      this.allData = response.EventProviders;
      this.providers =this.allData.providerLists
    
    })
  }
 
 
 providerClicked(provdr, indx){ 
   console.log("indx",indx);
     this.indx= indx   
      this.providers.forEach((keys : any, vals :any) => {
        if(vals == indx){         
          provdr.sortedClusterArray = keys.clustersList;
        }
      })   
 
  }
  clustersClicked(cluster,jIndex){
     this.jIndx= jIndex
    cluster.sortedLdusArray = cluster.ldusList;
  }
  ldusClicked(ldus,kIndex){
    this.kIndx = kIndex;
    ldus.sortedTeamList = ldus.teamsList;
    
  }
  teamClicked(teamData,tIndex){
   
    this.tIndx = tIndex;
    teamData.sortedManagerList = teamData.managersList;
  
  }
  // managerClicked(managerData,mIndex){
  //   this.mIndx = mIndex
  // }
}
 
 

