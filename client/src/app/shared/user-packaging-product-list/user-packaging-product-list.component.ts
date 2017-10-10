import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user-packaging-product-list.component.html',
  styleUrls: ['./user-packaging-product-list.component.css']
})
export class UserPackagingProductListComponent implements OnInit {
  isFullWidthActive:boolean;
  constructor() { }

  ngOnInit() {
  }

  getWidthACtive(widthActive:boolean){
    this.isFullWidthActive = widthActive;
  }

}
