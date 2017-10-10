import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isFullWidth:boolean = false;
  @Output() widthActive = new EventEmitter<boolean>() 

  constructor() { }

  ngOnInit() {
  }

  //make width 20% of prod list
  widthToggle(){
    this.isFullWidth = !this.isFullWidth;
    this.widthActive.emit(this.isFullWidth);
  }

  //add custom product list by user show/hide
  addCustProd(){
    console.log("clicked");
    this.widthToggle();
  }

}
