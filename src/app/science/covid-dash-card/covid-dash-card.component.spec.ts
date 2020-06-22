import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDashCardComponent } from './covid-dash-card.component';

describe('CovidDashCardComponent', () => {
  let component: CovidDashCardComponent;
  let fixture: ComponentFixture<CovidDashCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidDashCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
