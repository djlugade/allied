import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserDetailsService } from '../../services/user-details.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {
  userdate: Date;
  fromLocation: string;
  dropLocation: string;
  pickupFloor: number;
  dropFloor: number;
  pickupLocation1: boolean;
  dropLocation1: boolean;
  relocation: string;
  curuserdate: Date;
  bhk: string;
  //  isCheckedPickupLocation1: string;
  //  isCheckedDropLocation1: string;
  constructor(private auth: UserDetailsService, private router: Router) { }

  ngOnInit() {
    const movingDetails = localStorage.getItem('moving-details');
    if (movingDetails == null) {
      this.router.navigate(['/moving-details']);
      return false;
     }
    const a = JSON.parse(movingDetails);
    this.movingDetailsValueLocalstorage(a);
    this.curuserdate = a.userdate;
  }

  // all form value moving-details
  movingDetailsValueLocalstorage(a) {
    this.userdate = a.userdate;
    this.fromLocation = a.fromLocation;
    this.dropLocation = a.dropLocation;
    this.pickupFloor = a.pickupFloor;
    this.dropFloor = a.dropFloor;
    this.pickupLocation1 = (a.elevatorPickupLoc === 'Yes') ? true : false;
    this.dropLocation1 = (a.elevatorDropLoc  === 'Yes') ? true : false;
    this.relocation = a.relocation;
    this.bhk = a.bhk;

  }

  sendConfirmBook(form) {
    // all details
    const allDetails = {
        'fullname' : form.value.fullname,
        'email' : form.value.email,
        'phno' : form.value.phno,
        'fromAddr' : form.value.fromAddr,
        'toAddr' : form.value.toAddr,
        'userDate': this.curuserdate,
        'fromLocation': this.fromLocation,
        'dropLocation': this.dropLocation,
        'pickupFloor': this.pickupFloor,
        'dropFloor': this.dropFloor,
        'elevatorPickupLoc': (this.pickupLocation1) ? 'Yes' : 'No',
        'elevatorDropLoc': (this.dropLocation1) ? 'Yes' : 'No',
        'relocation': this.relocation,
        'bhk': this.bhk
      };

    // save to db
    this.auth.saveuserDetails(allDetails).take(1).subscribe( data => {
        if (!data.success) {
          console.log(data.msg);
           return;
        }
        console.log('succesfully added');
        this.router.navigate(['/login']);
    });

    // send mail to user

    // go to thank you page
  }

}
