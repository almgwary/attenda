import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReportChartComponent } from './user-report-chart.component';

describe('UserReportChartComponent', () => {
  let component: UserReportChartComponent;
  let fixture: ComponentFixture<UserReportChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReportChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReportChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
