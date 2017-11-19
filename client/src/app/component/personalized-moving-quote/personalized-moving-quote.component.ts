import { Component, OnInit } from '@angular/core';
import { movingDetails } from '../../models/movingdetails';

@Component({
  selector: 'app-personalized-moving-quote',
  templateUrl: './personalized-moving-quote.component.html',
  styleUrls: ['./personalized-moving-quote.component.css']
})
export class PersonalizedMovingQuoteComponent implements OnInit {
  minDate = new Date();
  constructor() { }

  ngOnInit() {
  }

  saveTempData(form: movingDetails) {
    console.log(form);
  }

}
