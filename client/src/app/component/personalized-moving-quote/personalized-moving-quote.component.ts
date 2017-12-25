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
  }

  saveTempData(form: NgForm) {
    let pickupLocation: string = form.value.pickupLocation;
    let dropLocation1: string = form.value.elevdropLocation;
    pickupLocation = (pickupLocation) ? 'Yes' : 'No';
    dropLocation1 = (dropLocation1) ? 'Yes' : 'No';
    const formValue = {
                    'userDate': form.value.userdate,
                    'fromLocation': form.value.fromLocation,
                    'dropLocation': form.value.dropLocation,
                    'pickupFloor': form.value.pickupFloor,
                    'dropFloor': form.value.dropFloor,
                    'elevatorPickupLoc': pickupLocation,
                    'elevatorDropLoc': dropLocation1,
                    'relocation': form.value.relocation,
                    'bhk': form.value.bhk
                    };
        localStorage.setItem('movingDetails', JSON.stringify(formValue));
        console.log('succesfully added');
      // this.auth.saveuserDetails(formValue).take(1).subscribe( data => {
      //   if (!data.success) {
      //      return;
      //   }
      //   console.log('succesfully added');
      //   this.router.navigate(['/login']);
      // });
    }
}

