import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedVerticalChartComponent } from './stacked-vertical-chart.component';

describe('StackedVerticalChartComponent', () => {
  let component: StackedVerticalChartComponent;
  let fixture: ComponentFixture<StackedVerticalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedVerticalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedVerticalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
