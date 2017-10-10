import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.scss']
})
export class ProductDataComponent implements OnInit {
  @Input() isFullWidth: boolean;
  constructor() { }

  ngOnInit() {
  }

}
