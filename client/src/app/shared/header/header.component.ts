import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../services/admin-auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public auth: AdminAuthService, 
              private flashMsg:FlashMessagesService, 
              private router:Router) { }

  ngOnInit() {
  }

  
  logout(){
    this.auth.logOut();
    this.flashMsg.show("Successfully Logout...", { timeout: 3000 }); 
    this.router.navigate(['/']);
  }
}
