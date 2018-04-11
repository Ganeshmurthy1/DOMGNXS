

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
//import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LoginService } from './services/login.service';
import { LoaderService } from './services/loader.service';
import { WmtService } from './services/wmt.service';
import { TodoService } from './services/todo.service';
import { AppRoutingModule } from './app-routing.module';
import { GlobalService } from './services/global.service';
import { TodoComponent } from './component/todo/todo.component';
import { TodoTableComponent } from './component/todo-table/todo-table.component';
import { KeysPipe } from './directive/objectToKeys.directive';
import { OrderPipe } from './directive/orderByPipe.directive';
import { MegaPreferenceComponent } from './component/mega-preference/mega-preference.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';
import { WmtComponent } from './component/wmt/wmt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr'; 
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { GlobalPreferenceComponent } from './component/global-preference/global-preference.component';
import { GlobalPreferencesService } from './services/global-preferences.service'; 
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { StickyHeaderDirective } from './directive/sticky-header.directive';
import { StackedVerticalChartComponent } from './component/stacked-vertical-chart/stacked-vertical-chart.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    TodoTableComponent,
    KeysPipe,
    OrderPipe,
    MegaPreferenceComponent,
    NavbarComponent,
    WmtComponent,   
    GlobalPreferenceComponent,
    StickyHeaderDirective,
    StackedVerticalChartComponent
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule, 
    ToastrModule.forRoot( ),
    DataTableModule,
    SharedModule,
    NgxDatatableModule,
    AppRoutingModule,
    NgxChartsModule
 
    
  ],
  providers: [AppComponent, LoginService, GlobalService, TodoService, WmtService, CookieService, LoaderService,GlobalPreferencesService],
  bootstrap: [AppComponent],
  entryComponents: [
  
]
})
export class AppModule { }
