import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product-count',
  templateUrl: './update-product-count.component.html',
  styleUrls: ['./update-product-count.component.css']
})
export class UpdateProductCountComponent implements OnInit {
  //@Output('prodCount') outCount:EventEmitter<number> = new EventEmitter<number>();
  prodCount = 0;

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.prodCount = 1;
  }

  add(count: NgForm ): number{
     return this.prodCount ++;
  }

  minus(): number {
    if (this.prodCount === 0) {
        return this.prodCount;
    }
    return this.prodCount--;
  }
}
