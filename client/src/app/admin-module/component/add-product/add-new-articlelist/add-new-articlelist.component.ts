import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from '../../../../services/articles.service';
import { articleModel } from '../../../../models/articlename.models';
import { Subscription } from 'rxjs/Subscription';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'add-new-articlelist',
  templateUrl: './add-new-articlelist.component.html',
  styleUrls: ['./add-new-articlelist.component.css']
})
export class AddNewArticlelistComponent implements OnInit, OnDestroy {
  articleName:Array<string>= [];
  artName$:Subscription;
  constructor(private articles:ArticlesService, private _flashMsg: FlashMessagesService) { }

  ngOnInit() {
    
    this.articles.articlename.subscribe( names =>{
        this.artName$ = this.articles.getArticlename().subscribe( (data) =>{
          if(data){
           this.articleName = data.name;
          }
       });
    });
  }

  articleList(form){
    var listname = {'articlelistname': form.value.articlelistname, 'iconname':form.value.iconname, 'articlename':form.value.articlename}
    console.log(listname);
    this.articles.articleList(listname).subscribe( data => {
      console.log(data);
      if(!data.sucess){
        return this._flashMsg.show(data.msg, { timeout: 3000 });
      }

      return this._flashMsg.show("Article List added Successfuly...", { timeout: 3000 });
    });
  }

  ngOnDestroy() {
    this.artName$.unsubscribe();
  }

}
