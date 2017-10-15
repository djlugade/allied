import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  @Input('listnameFilter') listnameFilter;
  constructor() { }

  ngOnInit() {
  }

}
