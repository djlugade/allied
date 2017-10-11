import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductCountComponent } from './update-product-count.component';

describe('UpdateProductCountComponent', () => {
  let component: UpdateProductCountComponent;
  let fixture: ComponentFixture<UpdateProductCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
