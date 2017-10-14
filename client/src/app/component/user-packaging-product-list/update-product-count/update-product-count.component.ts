import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product-count',
  templateUrl: './update-product-count.component.html',
  styleUrls: ['./update-product-count.component.css']
})
export class UpdateProductCountComponent implements OnInit 
  prodCount = 0;

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.prodCount = 1;
  }

  getProdCount(): void {
     this.outCount.emit(this.prodCount);
  }
  add(count: NgForm ): number {
     this.prodCount ++;
     this.getProdCount();
     return this.prodCount;
  }

  minus(): number {
    if (this.prodCount === 0) {
        this.getProdCount();
        return this.prodCount;
    }
    this.prodCount--;
    this.getProdCount();
    return this.prodCount;
  }
}
