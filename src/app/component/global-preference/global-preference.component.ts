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
   sortedClusterArray:any = [];
  
  prop:any;
  constructor(private router: Router, private globalPreferService: GlobalPreferencesService, private loaderService: LoaderService,
  private modalService: BsModalService) { 
 
  }

  ngOnInit() {

    // this.loaderService.display(true);
    this.LoginDetails = JSON.parse(localStorage.getItem('LoginDetails'));  
   
    if(this.LoginDetails != null){
      this.getAllGlobalPreferences();
      
    }else{
      //this.loaderService.display(false);
      this.router.navigate(['login']);
    } 
   
//   $(document).ready(function () {
//     $('.subField').hide();
//     //use event delegation since classes are changed dynamically
//     $('#branches').on('click', '.buttonShow', function () {
//         //remove the show class and assign hidden
//         $(this).toggleClass('buttonHide buttonShow');
//         //the subfield is a child of the parent not the next sibling
//         $(this).siblings('.subField').show('slow');
//     });
//     $('#branches').on('click', '.buttonHide', function () {
//         $(this).toggleClass('buttonHide buttonShow');
//         $(this).siblings('.subField').hide('slow');

//     });
// });
 
$(document).ready(function () {
// Select the main list and add the class "hasSubmenu" in each LI that contains an UL
$('ul').each(function(){
 
  $(this).find("li").has("ul").addClass("hasSubmenu");
});
// Find the last li in each level
$('li:last-child').each(function(){
 
  // Check if LI has children
  if ( $(this).children('ul').length === 0){
    // Add border-left in every UL where the last LI has not children
    $(this).closest('ul').css("border-left", "1px solid gray");
  } else {
    // Add border in child LI, except in the last one
    $(this).closest('ul').children("li").not(":last").css("border-left","1px solid gray");
    // Add the class "addBorderBefore" to create the pseudo-element :defore in the last li
    $(this).closest('ul').children("li").last().children("a").addClass("addBorderBefore");
    // Add margin in the first level of the list
    $(this).closest('ul').css("margin-top","20px");
    // Add margin in other levels of the list
    $(this).closest('ul').find("li").children("ul").css("margin-top","20px");
  };
});
// Add bold in li and levels above
$('ul li').each(function(){
   
  $(this).mouseenter(function(){
    $( this ).children("a").css({"font-weight":"bold","color":"#336b9b"});
  });
  $(this).mouseleave(function(){
    $( this ).children("a").css({"font-weight":"normal","color":"#428bca"});
  });
});
// Add button to expand and condense - Using FontAwesome
$('ul li.hasSubmenu').each(function(){
  
  $(this).prepend("<a href='#'><i class='fa fa-minus-circle'></i><i style='display:none;' class='fa fa-plus-circle'></i></a>");
  $(this).children("a").not(":last").removeClass().addClass("toogle");
});
// Actions to expand and consense
$('ul li.hasSubmenu a.toogle').click(function(){
   
  $(this).closest("li").children("ul").toggle("slow");
  $(this).children("i").toggle();
  return false;
});
  });

  }
  getAllGlobalPreferences(){
 
    this.globalPreferService.getGlobalPreferences().subscribe(response =>{
     // this.loaderService.display(false);

      this.allData = response.Preferences;
      this.providers = this.allData.EventProviders; 
      this.allEventCluster = this.allData.EventClusters;
     console.log("response",response);
      console.log("this.providers",this.providers);
      console.log("this.allEventCluster",this.allEventCluster);
    })
  }
  parentCheckboxClicked(indx){
console.log("index",indx);

// this.providers.forEach(providerElement => {
//   this.allEventCluster.forEach(clusterElement => {
//     if(providerElement.levelId == clusterElement.providerId){
//       this.sortedClusterArray.push(clusterElement.providerId);      
//     }          
//   });
// });
this.allEventCluster.forEach(clusterElement => {
  if(clusterElement.providerId == indx){
    this.sortedClusterArray.push(clusterElement); 
    console.log('this.sortedClusterArray',this.sortedClusterArray);
  }
});
  }

 
}

