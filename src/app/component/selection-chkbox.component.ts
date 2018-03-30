import { Component } from '@angular/core';

@Component({
  selector: 'chkbox-selection-demo',
  template: `
    <div>
      <h3>
        Checkbox Selection
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/selection/selection-chkbox.component.ts" target="_blank">
            Source
          </a>
        </small>
        <small>
          <a href="javascript:void(0)" (click)="add()">Add</a> |
          <a href="javascript:void(0)" (click)="update()">Update</a> |
          <a href="javascript:void(0)" (click)="remove()">Remove</a> 
        </small>
      </h3>
      <div style='float:left;width:75%'>
        <ngx-datatable
          style="width: 90%"
          class="material"
          [rows]="rows"
          [columnMode]="'force'"
          [headerHeight]="50"
          [footerHeight]="50"
          [rowHeight]="'auto'"
          [limit]="5"
          [selected]="selected"
          [selectionType]="'checkbox'"
          [selectAllRowsOnPage]="false"
          [displayCheck]="displayCheck"
          (activate)="onActivate($event)"
          (select)='onSelect($event)'>
          <ngx-datatable-column
            [width]="30"
            [sortable]="false"
            [canAutoResize]="false"
            [draggable]="false"
            [resizeable]="false"
            [headerCheckboxable]="true"
            [checkboxable]="true">
          </ngx-datatable-column>
          <ngx-datatable-column name="Name"></ngx-datatable-column>
          <ngx-datatable-column name="Gender"></ngx-datatable-column>
          <ngx-datatable-column name="Company"></ngx-datatable-column>
        </ngx-datatable>
      </div>
      <div class='selected-column'>
        <h4>Selections <small>({{selected?.length}})</small></h4>
        <ul>
          <li *ngFor='let sel of selected'>
            {{sel.name}}
          </li>
          <li *ngIf="!selected?.length">No Selections</li>
        </ul>
      </div>
    </div>
  `
})
export class CheckboxSelectionComponent {

  rows = [];
  selected = [];

  constructor() {
 
      this.rows = [
        {
            "name": "Ethel Price",
            "gender": "female",
            "company": "Johnson, Johnson and Partners, LLC CMP DDC",
            "age": 5565
        },
        {
            "name": "Claudine Neal",
            "gender": "female",
            "company": "Sealoud",
            "age": 55
        },
        {
            "name": "Beryl Rice",
            "gender": "female",
            "company": "Velity",
            "age": 67
        },
        {
            "name": "Wilder Gonzales",
            "gender": "male",
            "company": "Geekko"
        },
        {
            "name": "Georgina Schultz",
            "gender": "female",
            "company": "Suretech"
        },
        {
            "name": "Carroll Buchanan",
            "gender": "male",
            "company": "Ecosys"
        },
        {
            "name": "Valarie Atkinson",
            "gender": "female",
            "company": "Hopeli"
        },
        {
            "name": "Schroeder Mathews",
            "gender": "male",
            "company": "Polarium"
        },
        {
            "name": "Lynda Mendoza",
            "gender": "female",
            "company": "Dogspa"
        },
        {
            "name": "Sarah Massey",
            "gender": "female",
            "company": "Bisba"
        },
        {
            "name": "Robles Boyle",
            "gender": "male",
            "company": "Comtract"
        },
        {
            "name": "Evans Hickman",
            "gender": "male",
            "company": "Parleynet"
        },
        {
            "name": "Dawson Barber",
            "gender": "male",
            "company": "Dymi"
        },
        {
            "name": "Bruce Strong",
            "gender": "male",
            "company": "Xyqag"
        },
        {
            "name": "Nellie Whitfield",
            "gender": "female",
            "company": "Exospace"
        },
        {
            "name": "Jackson Macias",
            "gender": "male",
            "company": "Aquamate"
        },
        {
            "name": "Pena Pena",
            "gender": "male",
            "company": "Quarx"
        },
        {
            "name": "Lelia Gates",
            "gender": "female",
            "company": "Proxsoft"
        },
        {
            "name": "Letitia Vasquez",
            "gender": "female",
            "company": "Slumberia"
        },
        {
            "name": "Trevino Moreno",
            "gender": "male",
            "company": "Conjurica"
        },
        {
            "name": "Barr Page",
            "gender": "male",
            "company": "Apex"
        },
        {
            "name": "Kirkland Merrill",
            "gender": "male",
            "company": "Utara"
        },
        {
            "name": "Blanche Conley",
            "gender": "female",
            "company": "Imkan"
        },
        {
            "name": "Atkins Dunlap",
            "gender": "male",
            "company": "Comveyor"
        },
        {
            "name": "Everett Foreman",
            "gender": "male",
            "company": "Maineland"
        },
        {
            "name": "Gould Randolph",
            "gender": "male",
            "company": "Intergeek"
        },
        {
            "name": "Kelli Leon",
            "gender": "female",
            "company": "Verbus"
        },
        {
            "name": "Freda Mason",
            "gender": "female",
            "company": "Accidency"
        },
        {
            "name": "Tucker Maxwell",
            "gender": "male",
            "company": "Lumbrex"
        },
        {
            "name": "Yvonne Parsons",
            "gender": "female",
            "company": "Zolar"
        },
        {
            "name": "Woods Key",
            "gender": "male",
            "company": "Bedder"
        },
        {
            "name": "Stephens Reilly",
            "gender": "male",
            "company": "Acusage"
        },
        {
            "name": "Mcfarland Sparks",
            "gender": "male",
            "company": "Comvey"
        },
        {
            "name": "Jocelyn Sawyer",
            "gender": "female",
            "company": "Fortean"
        },
        {
            "name": "Renee Barr",
            "gender": "female",
            "company": "Kiggle"
        },
        {
            "name": "Gaines Beck",
            "gender": "male",
            "company": "Sequitur"
        },
        {
            "name": "Luisa Farrell",
            "gender": "female",
            "company": "Cinesanct"
        },
        {
            "name": "Robyn Strickland",
            "gender": "female",
            "company": "Obones"
        },
        {
            "name": "Roseann Jarvis",
            "gender": "female",
            "company": "Aquazure"
        }];
    
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [ this.rows[1], this.rows[3] ];
  }

  remove() {
    this.selected = [];
  }

  displayCheck(row) {
    return row.name !== 'Name';
  }
}