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
  a = [];

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
   * update count to localstorage
   */
  updateCount(prodCount, articlename) {
    const updateProd = JSON.parse(localStorage.getItem('allData'));
    updateProd.forEach(item => {
       if (item.articlename  === articlename) {
           item.prodcount = prodCount;
           localStorage.setItem('allData', JSON.stringify(updateProd));
       }
    });
  }

  /**
   * Add data first time to localstorage
   */
  updateData(data) {
    const getData = JSON.parse(localStorage.getItem('allData'));
    if (getData) {
      // Parse the serialized data back into an aray of objects
      this.a = JSON.parse(localStorage.getItem('allData'));
    }
    // Push the new data (whether it be an object or anything else) onto the array
    this.a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('allData', JSON.stringify(this.a));
   console.log(this.a);
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
