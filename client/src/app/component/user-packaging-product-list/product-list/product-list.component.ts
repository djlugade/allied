import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { Subscription } from 'rxjs/Rx';
import { ISlimScrollOptions } from 'ng2-slimscroll';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isFullWidth = false;
  articlename$: Subscription;
  articlelisdata: string[] = [];
  opts: ISlimScrollOptions;
  @Input('listname') listname: string;

  @Output() widthActive: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _articles: ArticlesService) { }

  ngOnInit() {
    console.log(this.listname);
    this.opts = {
      position: 'right',
      barBackground: '#000000',
    };

    this._articles.getArticlename().subscribe( data => {
        this.articlelisdata = data.name;
    });
  }

  // make width 20% of prod list
  widthToggle(): void {
    this.isFullWidth = !this.isFullWidth;
    this.widthActive.emit(this.isFullWidth);
  }


  showCutomProdlist(): void {
    this.isFullWidth = true;
    this.widthActive.emit(this.isFullWidth);
  }

}
