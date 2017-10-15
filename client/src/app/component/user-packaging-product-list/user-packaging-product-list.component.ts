import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user-packaging-product-list.component.html',
  styleUrls: ['./user-packaging-product-list.component.css']
})
export class UserPackagingProductListComponent implements OnInit {
  isFullWidthActive: boolean;
  articleslist: string[] | any = [];
  filterData = [];
  queryParam;
  listname: string;
  searchlistname = { articlelistname : ''};

  constructor(private articles: ArticlesService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.articles.getArtilcleList()
    .switchMap( data => {
      this.articleslist = data.name;
      return this.router.queryParamMap;
    }).subscribe( query => {
        this.queryParam = query.get('name');

        this.filterData = (this.queryParam) ?
        this.articleslist.filter(p => {
          this.listname = p.articlename.replace(/\s+/, '');
          return this.listname === this.queryParam;
        }) : this.articleslist;
    });
  }

  getWidthACtive(widthActive: boolean){
    this.isFullWidthActive = widthActive;
  }

}
