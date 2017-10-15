import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.scss', '../update-product-count/update-product-count.component.css']
})
export class ProductDataComponent implements OnInit {
  @Input() isFullWidth: boolean;
  @Input('allList') allList;
 @Input('filterListname') filterListname;
  constructor() { }

  ngOnInit() {
  }
}
