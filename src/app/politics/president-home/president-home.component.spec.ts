import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentHomeComponent } from './president-home.component';

describe('PresidentHomeComponent', () => {
  let component: PresidentHomeComponent;
  let fixture: ComponentFixture<PresidentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
