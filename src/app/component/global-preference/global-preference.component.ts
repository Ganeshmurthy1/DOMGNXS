 

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
  clickedObjects:any = {};
  saveglobalPReferenceArray:any = [];
  savingApiData:any = [];
  preferenceDetails:string;
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
    this.loaderService.display(false);
   
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
    this.loaderService.display(true);
    this.globalPreferService.getGlobalPreferences().subscribe(response =>{
      this.loaderService.display(false);
 
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


  
  savePreferences(){
    this.saveglobalPReferenceArray = [];
    console.log("this.providers",this.providers);
    this.providers.forEach((keys : any, vals :any) => { 
          if(keys.ischecked == true){          
            this.saveglobalPReferenceArray.push(keys);
          }
          keys.clustersList.forEach((clusterkeys : any, clusterVals :any) => {        
              if(clusterkeys.ischecked == true){         
              this.saveglobalPReferenceArray.push(clusterkeys);            
              }
              clusterkeys.ldusList.forEach((lduskeys : any, ldusVals :any) => {
                 if(lduskeys.ischecked == true){            
                    this.saveglobalPReferenceArray.push(lduskeys);        
                  }
                 lduskeys.teamsList.forEach((teamkeys : any, teamVals :any) => {
                    if(teamkeys.ischecked == true){            
                      this.saveglobalPReferenceArray.push(teamkeys);          
                    }
                    teamkeys.managersList.forEach((managerkeys : any, managerVals :any) => {
        
                          if(managerkeys.ischecked == true){            
                            this.saveglobalPReferenceArray.push(managerkeys);          
                          }
               
                    })
                 })
              })
         })   
    }) 
     this.saveglobalPReferenceArray.forEach((key:any, vals:any)=>{
   
     this.clickedObjects = {};
     this.clickedObjects.EventProvider = key.eventProvider;
     this.clickedObjects.EventCluster = key.eventCluster;
     this.clickedObjects.EventLDU = key.eventLDU;
     this.clickedObjects.EventTeam = key.eventTeam;
     this.clickedObjects.EventManager = key.eventManager;
      this.savingApiData.push(this.clickedObjects);
    
     
    })
  
   console.log("this.savingApiData",this.savingApiData);
   
    this.preferenceDetails = JSON.stringify(this.savingApiData);
   this.globalPreferService.toSaveGlobalPreferences(this.preferenceDetails).subscribe(response =>{
    console.log("this.response",response);

   })
  }
}
 
 

