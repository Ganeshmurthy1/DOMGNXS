import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPreferenceModalComponent } from './global-preference-modal.component';

describe('GlobalPreferenceModalComponent', () => {
  let component: GlobalPreferenceModalComponent;
  let fixture: ComponentFixture<GlobalPreferenceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPreferenceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPreferenceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
