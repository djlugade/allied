import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-update-product-count',
  templateUrl: './update-product-count.component.html',
  styleUrls: ['./update-product-count.component.css']
})
export class UpdateProductCountComponent implements OnInit {
  prodCount = 0;
  @Output() prodCountEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _articles: ArticlesService) {}

  ngOnInit() {
  }

  addToCart(): void {
    this._articles.getTotatlArticleCount$(1);
    this.prodCount = 1;
    this.prodCountEvent.emit(this.prodCount);
  }


  add(count: NgForm ): number {
     this.prodCount ++;
     return this.prodCount;
  }

  minus(): number {
    if (this.prodCount === 1) {
        this.prodCount--;
        this.prodCountEvent.emit(this.prodCount);
        this._articles.getTotatlArticleCount$(-1);
        return this.prodCount;
    }
    this.prodCount--;
    return this.prodCount;
  }
}
