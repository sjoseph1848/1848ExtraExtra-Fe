import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcardComponent } from './showcard.component';

describe('ShowcardComponent', () => {
  let component: ShowcardComponent;
  let fixture: ComponentFixture<ShowcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
