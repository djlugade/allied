import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {tokenNotExpired} from 'angular2-jwt';
import { url  } from '../../environments/environment';
import 'rxjs/add/operator/map';



@Injectable()
export class AdminAuthService {
  private url:string = url;
  authToken: string;
  user;
  option;

  constructor(private _http: Http,) {   
   }
  
   authHeaders(){
       this.option = new RequestOptions({ 
         headers: new Headers({
          'Content-Type': 'application/json',
          //'token': token
         }) 
        });
   }
  
   getUserName():string{
      let a = localStorage.getItem('user');
      let em = JSON.parse(a);
      let userEmail:string = em.email;  
      return userEmail.substring(0, userEmail.indexOf("@"));
   }

   getToken():string{
    const curToken = localStorage.getItem('token');
    return curToken;
   }
  
  /**
   * Register  
   */
  register(form):Observable<any>{
    return this._http.post(`${this.url}/auth/admin-register`, form )
    .map( res => {
      return res.json();
    });
  }

   /**
   * login with email  
   */
  loginUser(form):Observable<any>{
    return this._http.post(`${this.url}/auth/login`, form)
    .map(res=> {
      console.log(res.json());
      return res.json()
    });
  }

  /**
   * store token and user email 
   */
  storeUserToken(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  /**
   * check if user logged in return boolean
   */
  loggedIn():boolean {
    return tokenNotExpired();
  }

  

  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
