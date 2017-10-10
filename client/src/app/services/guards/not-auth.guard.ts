import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AdminAuthService } from '../admin-auth.service';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(private auth:AdminAuthService, private router:Router){}
  canActivate( ):boolean {
    console.log(this.auth.loggedIn());
    if(this.auth.loggedIn()){
      this.router.navigate(['/admin']);
      return false;
    }
      return true;     
  }
}
