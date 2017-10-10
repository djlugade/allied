import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Injectable()
export class AdminAuthGuardService implements CanLoad {

  constructor(private auth:AdminAuthService, private router:Router) { }

  canLoad(){
    if(this.auth.loggedIn()){
      return true;
    }
    
    this.router.navigate(['/login']);  
    return false;  
  }

}
