import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from '../../../../services/articles.service';
import { Subscription } from 'rxjs/Subscription';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-new-articlelist',
  templateUrl: './add-new-articlelist.component.html',
  styleUrls: ['./add-new-articlelist.component.css']
})
export class AddNewArticlelistComponent implements OnInit, OnDestroy {
  articleName: any  = [];
  artName$: Subscription;
  constructor(private articles: ArticlesService, private _flashMsg: FlashMessagesService) { }

  ngOnInit() {
    this.artName$ = this.articles.getArticlename().subscribe( (data) => {
      console.log(data.name);
       this.articleName = data.name;
   });
    this.articles.articlename.subscribe( (names: string) => {
      this.articleName.push({'articlename' : names});
    });
  }

  articleList(form): void {
    const listname = {'articlelistname': form.value.articlelistname, 'iconname': form.value.iconname, 'articlename': form.value.articlename}

    this.articles.articleList(listname).subscribe( data => {
      if (!data.success) {
        this._flashMsg.show(data.msg, { timeout: 3000 });
      }else {
        form.reset();
        this._flashMsg.show('Article List added Successfuly...', { timeout: 3000 });
      }
    });
  }

  ngOnDestroy() {
    this.artName$.unsubscribe();
  }

}
