import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../shared/route-copmponent.animation';

@Component({
  selector: 'app-user-packaging-info',
  templateUrl: './user-packaging-info.component.html',
  styleUrls: ['./user-packaging-info.component.css'],
  animations:[slideInDownAnimation]
})
export class UserPackagingInfoComponent implements OnInit {

  //Component Animation
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
