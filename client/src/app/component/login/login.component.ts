import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminAuthService } from '../../services/admin-auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AdminAuthService, 
              private flashMsg:FlashMessagesService, 
              private _router:Router) { }

  ngOnInit() {
  }

  login(f:NgForm){
    let loginDetail = {'email': f.value.email, 'password':f.value.password};
    this.auth.loginUser(loginDetail).take(1).subscribe(data =>{
      if(!data.success)     return this.flashMsg.show(data.msg, { timeout: 3000 });
      
      this.auth.storeUserToken(data.token, data.user);
      this.flashMsg.show("Successfully Login", { timeout: 3000 }); 
      this._router.navigate(['admin']);
    });
  }

}
