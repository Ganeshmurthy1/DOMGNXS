import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaPreferenceComponent } from './mega-preference.component';

describe('MegaPreferenceComponent', () => {
  let component: MegaPreferenceComponent;
  let fixture: ComponentFixture<MegaPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
