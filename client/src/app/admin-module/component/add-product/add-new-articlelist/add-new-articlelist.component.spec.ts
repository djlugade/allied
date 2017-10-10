import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewArticlelistComponent } from './add-new-articlelist.component';

describe('AddNewArticlelistComponent', () => {
  let component: AddNewArticlelistComponent;
  let fixture: ComponentFixture<AddNewArticlelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewArticlelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewArticlelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
