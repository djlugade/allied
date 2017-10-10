import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDataComponent } from './product-data.component';

describe('ProductDataComponent', () => {
  let component: ProductDataComponent;
  let fixture: ComponentFixture<ProductDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
