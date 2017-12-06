import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserDetailsService {
  private url: string = url;

  constructor(private _http: Http) { }

saveuserDetails(value): Observable<any> {
    return this._http.post(`${this.url}/userarticles/user-details`, value)
    .map((res) => {
      return res.json();
    });
  }

}
