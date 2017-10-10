import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';
import { articleModel } from '../models/articlename.models';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticlesService {
  private url:string = url;
  constructor(private _http:Http) { }

  /**
   * get article name
   */
  getArticlename():Observable<any>{
    return this._http.get(`${this.url}/articles/articlename`)
    .map( (res) => res.json());
  }

  /**
   * save article name
   */
  saveArticlename(value):Observable<any>{
    return this._http.post(`${this.url}/articles/articles-name`, value)
    .map((res)=>{
      return res.json();
    });
  }

  /**
   * save article list
   */
  articleList(value):Observable<any>{
    return this._http.post(`${this.url}/articles/article-list`, value)
    .map((res)=>{
      return res.json();
    });
  }
}
