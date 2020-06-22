import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCasesDashComponent } from './covid-cases-dash.component';

describe('CovidCasesDashComponent', () => {
  let component: CovidCasesDashComponent;
  let fixture: ComponentFixture<CovidCasesDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidCasesDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCasesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
