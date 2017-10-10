import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackagingProductCartComponent } from './user-packaging-product-cart.component';

describe('UserPackagingProductCartComponent', () => {
  let component: UserPackagingProductCartComponent;
  let fixture: ComponentFixture<UserPackagingProductCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPackagingProductCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPackagingProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
