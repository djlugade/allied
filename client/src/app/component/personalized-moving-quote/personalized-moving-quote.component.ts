import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalized-moving-quote',
  templateUrl: './personalized-moving-quote.component.html',
  styleUrls: ['./personalized-moving-quote.component.css']
})
export class PersonalizedMovingQuoteComponent implements OnInit {
  minDate = new Date(Date.now() + 48 * 3600 * 1000);

  constructor() {}

  ngOnInit() {
  }

}
