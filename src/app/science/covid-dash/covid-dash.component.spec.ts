import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDashComponent } from './covid-dash.component';

describe('CovidDashComponent', () => {
  let component: CovidDashComponent;
  let fixture: ComponentFixture<CovidDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
