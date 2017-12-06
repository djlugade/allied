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
  minDate = new Date();
  constructor(private auth: UserDetailsService, private router: Router) { }

  ngOnInit() {
  }

  saveTempData(form: NgForm) {
    let pickupLocation: string = form.value.pickupLocation;
    let dropLocation: string = form.value.dropLocation;
    pickupLocation = (pickupLocation) ? 'Yes' : 'No';
    dropLocation = (dropLocation) ? 'Yes' : 'No';
    const formValue = {
                    'userDate': form.value.userdate,
                    'fromLocation': form.value.fromLocation,
                    'dropLocation': form.value.dropLocation,
                    'pickupFloor': form.value.pickupFloor,
                    'dropFloor': form.value.dropFloor,
                    'elevatorPickupLoc': pickupLocation,
                    'elevatorDropLoc': dropLocation,
                    'relocation': form.value.relocation,
                    'bhk': form.value.bhk
                    };

      this.auth.saveuserDetails(formValue).take(1).subscribe( data => {
        if (!data.success) {
           return;
        }

        console.log('succesfully added');
        this.router.navigate(['/login']);
      });
    }
}

