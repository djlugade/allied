import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomProdComponent } from './add-custom-prod.component';

describe('AddCustomProdComponent', () => {
  let component: AddCustomProdComponent;
  let fixture: ComponentFixture<AddCustomProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
