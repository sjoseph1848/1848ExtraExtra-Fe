import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsHomeComponent } from './economics-home.component';

describe('EconomicsHomeComponent', () => {
  let component: EconomicsHomeComponent;
  let fixture: ComponentFixture<EconomicsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
