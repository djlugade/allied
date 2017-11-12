import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedMovingQuoteComponent } from './personalized-moving-quote.component';

describe('PersonalizedMovingQuoteComponent', () => {
  let component: PersonalizedMovingQuoteComponent;
  let fixture: ComponentFixture<PersonalizedMovingQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedMovingQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedMovingQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
