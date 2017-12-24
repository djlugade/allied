import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
  @Input('articlename') articlename: string;
  @Input('iconname') iconname: string;
  @Input('filterarticle') filterarticle: string;


  constructor(private _articles: ArticlesService) {}

  ngOnInit() {
    const updateProd = JSON.parse(localStorage.getItem('allData'));
    if (!updateProd) return;
    updateProd.forEach((item) => {
       if (item.articlename  === this.articlename) {
           this.prodCount = item.prodcount;
       }
    });
  }

  addToCart(): void {
    this._articles.getTotatlArticleCount$(1);
    this.prodCount = 1;
    this.prodCountEvent.emit(this.prodCount);
    const data = {
      'article': this.filterarticle,
      'iconname' : this.iconname,
      'articlename': this.articlename,
      'prodcount' : this.prodCount
   };
   this._articles.updateData(data);
  }


  add(): number {
     this.prodCount ++;
     if (this.prodCount >= 1) {
    }
    this._articles.updateCount(this.prodCount, this.articlename);
     return this.prodCount;
  }

  minus(): number {
    if (this.prodCount === 1) {
         this.prodCount--;
        this.prodCountEvent.emit(this.prodCount);
         this._articles.getTotatlArticleCount$(-1);
        if (this.prodCount == 0) {
          const updateProd = JSON.parse(localStorage.getItem('allData'));
          updateProd.forEach((item, index, object) => {
             if (item.articlename  === this.articlename) {
                 object.splice(index, 1);
                 localStorage.setItem('allData', JSON.stringify(updateProd));
                 console.log('Removed' + this.prodCount);
             }
          });
     }
     return this.prodCount;
    }
    this.prodCount--;
    this._articles.updateCount(this.prodCount, this.articlename);
    return this.prodCount;
  }
}
