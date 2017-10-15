import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AdminAuthService } from './admin-auth.service';

@Injectable()
export class ArticlesService {
  private url: string = url;

  articlename: BehaviorSubject<string> = new BehaviorSubject<string>('');
  totArticleCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    /**
   * get change article name through Behaviour subject
   */
  getArtName$(name: string) {
    this.articlename.next(name);
  }

  /**
   * total article count
   */
  getTotatlArticleCount$(count: number) {
    this.totArticleCount.next(count);
  }

  /**
   * articlelist name all
   */
  getArtilcleList(): Observable<any> {
    return this._http.get(`${this.url}/articles/alllist`).map( res =>{
        return res.json();
    });
  }

  constructor(private _http: Http) { }

  /**
   * get article name
   */
  getArticlename(): Observable<any> {
    return this._http.get(`${this.url}/articles/articlename`)
    .map( (res) => res.json());
  }

  /**
   * save article name
   */
  saveArticlename(value): Observable<any> {
    return this._http.post(`${this.url}/articles/articles-name`, value)
    .map((res) => {
      return res.json();
    });
  }

  /**
   * save article list
   */
  articleList(value): Observable<any> {
    return this._http.post(`${this.url}/articles/article-list`, value)
    .map((res) => {
      console.log(res.json());
      return res.json();
    });
  }
}
