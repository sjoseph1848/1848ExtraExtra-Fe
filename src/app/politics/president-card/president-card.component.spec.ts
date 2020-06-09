import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentCardComponent } from './president-card.component';

describe('PresidentCardComponent', () => {
  let component: PresidentCardComponent;
  let fixture: ComponentFixture<PresidentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
