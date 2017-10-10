import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackagingRegisterComponent } from './user-packaging-register.component';

describe('UserPackagingRegisterComponent', () => {
  let component: UserPackagingRegisterComponent;
  let fixture: ComponentFixture<UserPackagingRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPackagingRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPackagingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
