import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticlesService } from '../../../../services/articles.service';
import { articleModel } from '../../../../models/articlename.models';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'create-new-article',
  templateUrl: './create-new-article.component.html',
  styleUrls: ['./create-new-article.component.css']
})
export class CreateNewArticleComponent implements OnInit {

  constructor(private _articles:ArticlesService,
              private _flashMsg: FlashMessagesService) { }
  articles: articleModel[] = [];
  ngOnInit() {
  }
  
  articleName(form:NgForm):void{
    var articlename= { 'articlename': form.value.articlename.toLowerCase()};
    console.log(articlename);
    this._articles.saveArticlename(articlename).take(1)
    .subscribe( data =>{
      if(!data.success) return this._flashMsg.show(data.msg, { timeout: 3000 });

      return this._flashMsg.show("Article Name added Successfuly...", { timeout: 3000 });
    });
  };
}
