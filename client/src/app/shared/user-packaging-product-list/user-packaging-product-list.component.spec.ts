import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackagingProductListComponent } from './user-packaging-product-list.component';

describe('UserPackagingProductListComponent', () => {
  let component: UserPackagingProductListComponent;
  let fixture: ComponentFixture<UserPackagingProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPackagingProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPackagingProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
