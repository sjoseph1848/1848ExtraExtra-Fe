import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsHomeComponent } from './politics-home.component';

describe('PoliticsHomeComponent', () => {
  let component: PoliticsHomeComponent;
  let fixture: ComponentFixture<PoliticsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
