import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtComponent } from './wmt.component';

describe('WmtComponent', () => {
  let component: WmtComponent;
  let fixture: ComponentFixture<WmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
