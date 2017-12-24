import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalArticleCount = 0;
  active = false;
  constructor(private articles: ArticlesService) { }

  ngOnInit() {
   
     this.articles.totArticleCount.subscribe( count => {
      const updateProd1 = JSON.parse(localStorage.getItem('allData'));
      const count1:number = updateProd1 ? updateProd1.length : 0;
      // console.log(count);
      this.totalArticleCount = count1 + count;
      this.active = true;
      setTimeout(() => {
        this.active = false;
      }, 1000);
     });
    // console.log(this.articles.totArticleCount);
  }

}
