import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isFullWidth = false;
  @Output() widthActive: EventEmitter<boolean> = new EventEmitter<boolean>();
  panel;
  constructor() { }
  ngOnInit() {
  }

  // make width 20% of prod list
  widthToggle(): void {
    this.isFullWidth = !this.isFullWidth;
    this.panel = false;
    this.widthActive.emit(this.isFullWidth);
  }


  showCutomProdlist(): void {
    this.isFullWidth = true;
    this.widthActive.emit(this.isFullWidth);
  }

}
