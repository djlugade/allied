import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AdminAuthService } from '../../services/admin-auth.service';
import 'rxjs/add/operator/take';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  matchingEmail:string;
  constructor(private auth:AdminAuthService, 
              private router:Router,
              private flashMsg:FlashMessagesService) { }

  ngOnInit() {
  }

  register(f:NgForm){
    let email:string = f.value.email;
    let formValue = {'username': f.value.username, 'email': email.toLowerCase(), 'password':f.value.password}
    this.auth.register(formValue).take(1).subscribe( data =>{
      if(!data.success){

         return this.flashMsg.show(data.msg, { timeout: 3000 });
      }
      this.flashMsg.show("Data Saved Successfully", { timeout: 3000 });
      this.router.navigate(['/login']);
    });
  }

}
