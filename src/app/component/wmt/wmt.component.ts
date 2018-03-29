import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wmt',
  templateUrl: './wmt.component.html',
  styleUrls: ['./wmt.component.css']
})

export class WmtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

}
