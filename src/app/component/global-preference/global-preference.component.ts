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
//       $(document).ready(function () {
      
//   // Select the main list and add the class hasSubmenu" in each LI that contains an UL
//   $('ul').each(function(){  
    
//     $(this).find("li").has("ul").addClass("hasSubmenu");
//   });
//   // Find the last li in each level
//   $('li:last-child').each(function(){ 
//     // Check if LI has children
//     if ( $(this).children('ul').length === 0){

//       // Add border-left in every UL where the last LI has not children
//       $(this).closest('ul').css("border-left", "1px solid gray");
//     } else {
//       // Add border in child LI, except in the last one
//       $(this).closest('ul').children("li").not(":last").css("border-left","1px solid gray");
//       // Add the class "addBorderBefore" to create the pseudo-element :defore in the last li
//       $(this).closest('ul').children("li").last().children("a").addClass("addBorderBefore");
//       // Add margin in the first level of the list
//       $(this).closest('ul').css("margin-top","20px");
//       // Add margin in other levels of the list
//       $(this).closest('ul').find("li").children("ul").css("margin-top","20px").css("border-left","1px solid gray");
//     };
//   });
//   // Add bold in li and levels above
//   $('ul li').each(function(){
     
//     $(this).mouseenter(function(){
//       $( this ).children("a").css({"font-weight":"bold","color":"#336b9b"});
//     });
//     $(this).mouseleave(function(){
//       $( this ).children("a").css({"font-weight":"normal","color":"#428bca"});
//     });
//   });
//   // Add button to expand and condense - Using FontAwesome
//   $('ul li.hasSubmenu').each(function(){
    
//     $(this).prepend("<a href='#'><i class='fa fa-minus-circle'></i><i style='display:none;' class='fa fa-plus-circle'></i></a>");    
//     // $(this).children("a").not(":last").removeClass().addClass("toogle");
//     $(this).children("a").not(":last").removeClass().addClass("toogle");
//   });
//   // Actions to expand and consense
//   $('ul li.hasSubmenu a.toogle').click(function(){
     
//     $(this).closest("li").children("ul").toggle("slow");
//     $(this).children("i").toggle();
//     return false;
//   });
//     });
//  },3000);    
   

//     }

  getAllGlobalPreferences(){
 
    this.globalPreferService.getGlobalPreferences().subscribe(response =>{
     // this.loaderService.display(false);
     console.log("response",response);
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
 
 

