import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-custom-prod',
  templateUrl: './add-custom-prod.component.html',
  styleUrls: ['./add-custom-prod.component.css']
})
export class AddCustomProdComponent implements OnInit {
  curprodCount: number;
  constructor() { }

  ngOnInit() {
  }


  prodCount(count: number) {
    console.log(count);
    this.curprodCount = count;
  }

}
