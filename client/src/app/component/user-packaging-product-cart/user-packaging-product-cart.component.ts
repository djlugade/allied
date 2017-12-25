import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-packaging-product-cart',
  templateUrl: './user-packaging-product-cart.component.html',
  styleUrls: ['./user-packaging-product-cart.component.css']
})
export class UserPackagingProductCartComponent implements OnInit {
  data = [];
  constructor() { }

  ngOnInit() {
     this.data = JSON.parse(localStorage.getItem('allData'));
  }

  // Remove Item
  removeItem(articlename) {
    this.data.forEach( (item, index, object) => {
      object.splice(index, 1);
      localStorage.setItem('allData', JSON.stringify(this.data));
      return;
    });
  }

}
