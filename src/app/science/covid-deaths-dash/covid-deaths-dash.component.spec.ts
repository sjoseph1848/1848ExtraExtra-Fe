import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDeathsDashComponent } from './covid-deaths-dash.component';

describe('CovidDeathsDashComponent', () => {
  let component: CovidDeathsDashComponent;
  let fixture: ComponentFixture<CovidDeathsDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidDeathsDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDeathsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
