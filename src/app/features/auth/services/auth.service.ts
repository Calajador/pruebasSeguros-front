import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { WebReqService } from 'src/app/core/services/web-req.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Constants } from 'src/app/core/API/Constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token;
  public identity;

  constructor(
    private _web: WebReqService,
    private router: Router,
    private http: HttpClient
  ) {}

  signUpUser(user) {
    return this._web.post('registrar', user);
  }

  loginUser(user) {
    return this._web.post('login', user);
  }

  isLogged() {
    return !!localStorage.getItem('token');
  }

  getToken(): Observable<any> {
    let token = localStorage.getItem('token');
    if (token) {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

  getIdentity(): Observable<any> {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity) {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }

  // loginUser2(user) {
  //   return this.http.post(Constants.URL_OAUTH, user);
  // }

  // getToken2(apiSecret): Observable<any> {
  //   const body = new HttpParams()
  //     .set('grant_type', apiSecret.grant_type)
  //     .set('client_secret', apiSecret.client_secret)
  //     .set('scope', apiSecret.scope)
  //     .set('client_id', apiSecret.client_id);

  //   let options;
  //   const headers = new HttpHeaders();
  //   headers.set('Content-Type', 'application/x-www-form-urlencoded');
  //   headers.set(
  //     'Authorization',
  //     'Basic RGF2aWQuQWxvbnNvQGl0YWNhLWRldi5jb206cGdMZmJMdzhYZjJwNE5ZRGZzYWZjaTIx'
  //   );
  //   options = headers;
  //   return this.http.post<any>(Constants.URL_OAUTH, body, options);
  // }

  logOutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('identity');
    this.router.navigate(['/login']);
  }
}
