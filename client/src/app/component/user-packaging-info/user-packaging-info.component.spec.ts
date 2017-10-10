import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackagingInfoComponent } from './user-packaging-info.component';

describe('UserPackagingInfoComponent', () => {
  let component: UserPackagingInfoComponent;
  let fixture: ComponentFixture<UserPackagingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPackagingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPackagingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
