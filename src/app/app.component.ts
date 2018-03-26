import { LoaderService } from './services/loader.service';
import { Router, NavigationEnd } from '@angular/router';
import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { GlobalService } from './services/global.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public isLogin : boolean = true;
  public show: boolean;
  public showLoader: boolean;
  constructor(private router:Router, private globalService: GlobalService, cdRef: ChangeDetectorRef, private loaderService: LoaderService){

  }

  ngOnInit(){
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    })
    this.router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd){
        if(event.urlAfterRedirects === '/login'){
          this.isLogin = true;
        }else{
          this.isLogin = false;
        }
      }
    });

  }
}


