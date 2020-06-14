import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidHospitalizationsDashComponent } from './covid-hospitalizations-dash.component';

describe('CovidHospitalizationsDashComponent', () => {
  let component: CovidHospitalizationsDashComponent;
  let fixture: ComponentFixture<CovidHospitalizationsDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidHospitalizationsDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidHospitalizationsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
