import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from '../../../../services/articles.service';
import { articleModel } from '../../../../models/articlename.models';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'add-new-articlelist',
  templateUrl: './add-new-articlelist.component.html',
  styleUrls: ['./add-new-articlelist.component.css']
})
export class AddNewArticlelistComponent implements OnInit, OnDestroy {
  articleName:articleModel[] = [];
  artName$:Subscription;
  constructor(private articles:ArticlesService) { }

  ngOnInit() {

    this.artName$ = this.articles.getArticlename().subscribe( (data) =>{
       if(data){
        this.articleName = data.name;
       }
    });

  }
  articleList(form){
    var listname = {'articlelistname': form.value.articlelistname, 'iconname':form.value.iconname, 'articlename':form.value.articlename}
    this.articles.articleList(listname).take(1).subscribe(data => {
      if(!data) alert('something wrong');
    });
  }
  ngOnDestroy() {
    this.artName$.unsubscribe();
  }

}
