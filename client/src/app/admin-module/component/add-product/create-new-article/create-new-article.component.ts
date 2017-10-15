import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticlesService } from '../../../../services/articles.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-new-article',
  templateUrl: './create-new-article.component.html',
  styleUrls: ['./create-new-article.component.css']
})
export class CreateNewArticleComponent implements OnInit {
  artName: string;
  constructor(private _articles: ArticlesService,
              private _flashMsg: FlashMessagesService) { }
  ngOnInit() {}

  articleName(form: NgForm): void {
    const title = form.value.articlename.toLowerCase().replace(/ /g, '') ;
    console.log(title);
    const articlename = {
      'title' :  title,
      'articlename': form.value.articlename.toLowerCase(),
      'articleiconname': form.value.articleiconname
    };
    this._articles.saveArticlename(articlename).take(1)
    .subscribe( data => {
      if ( !data.success ) {
         return this._flashMsg.show(data.msg, { timeout: 3000 });
      }
      form.reset();
      this._articles.getArtName$(articlename.articlename);
      return this._flashMsg.show(' Article Name added Successfuly... ', { timeout: 3000 });
    });
  }
}
