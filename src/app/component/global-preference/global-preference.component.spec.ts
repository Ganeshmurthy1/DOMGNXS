import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPreferenceComponent } from './global-preference.component';

describe('GlobalPreferenceComponent', () => {
  let component: GlobalPreferenceComponent;
  let fixture: ComponentFixture<GlobalPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
