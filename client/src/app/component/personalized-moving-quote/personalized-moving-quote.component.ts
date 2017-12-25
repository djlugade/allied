import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { movingDetails } from '../../models/movingdetails';
import { UserDetails } from '../../models/user-details.model';
import { UserDetailsService } from '../../services/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalized-moving-quote',
  templateUrl: './personalized-moving-quote.component.html',
  styleUrls: ['./personalized-moving-quote.component.css']
})
export class PersonalizedMovingQuoteComponent implements OnInit {

  constructor(private auth: UserDetailsService, private router: Router) { }

  minDate = new Date(Date.now() + 48 * 3600 * 1000);

  ngOnInit() {
    if (localStorage.getItem('moving-details') != null) {
     // this.router.navigate(['/list']);
    }
  }

  saveTempData(form: NgForm) {
<<<<<<< HEAD
    let pickupLocation: string = form.value.pickupLocation;
    let dropLocation1: string = form.value.elevdropLocation;
    pickupLocation = (pickupLocation) ? 'Yes' : 'No';
=======
    let pickupLocation1: string = form.value.pickupLocation1;
    let dropLocation1: string = form.value.dropLocation1;
    pickupLocation1 = (pickupLocation1) ? 'Yes' : 'No';
>>>>>>> 9e924acec5b6fed1dbf40f53f73922732a9d4c7d
    dropLocation1 = (dropLocation1) ? 'Yes' : 'No';
    const formValue = {
                    'userDate': form.value.userdate,
                    'fromLocation': form.value.fromLocation,
                    'dropLocation': form.value.dropLocation,
                    'pickupFloor': form.value.pickupFloor,
                    'dropFloor': form.value.dropFloor,
<<<<<<< HEAD
                    'elevatorPickupLoc': pickupLocation,
=======
                    'elevatorPickupLoc': pickupLocation1,
>>>>>>> 9e924acec5b6fed1dbf40f53f73922732a9d4c7d
                    'elevatorDropLoc': dropLocation1,
                    'relocation': form.value.relocation,
                    'bhk': form.value.bhk
                    };
<<<<<<< HEAD
        localStorage.setItem('movingDetails', JSON.stringify(formValue));
        console.log('succesfully added');
=======
                    localStorage.setItem('moving-details', JSON.stringify(formValue));
                    this.router.navigate(['/list']);

>>>>>>> 9e924acec5b6fed1dbf40f53f73922732a9d4c7d
      // this.auth.saveuserDetails(formValue).take(1).subscribe( data => {
      //   if (!data.success) {
      //      return;
      //   }
<<<<<<< HEAD
=======

>>>>>>> 9e924acec5b6fed1dbf40f53f73922732a9d4c7d
      //   console.log('succesfully added');
      //   this.router.navigate(['/login']);
      // });
    }
}

