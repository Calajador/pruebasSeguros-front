import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { WebReqService } from 'src/app/core/services/web-req.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token;
  public identity;

  constructor(private _web: WebReqService, private router: Router) { }

  signUpUser(user) {
    return this._web.post('registrar', user);
  };

  loginUser(user) {
    return this._web.post('login',user);
  };

  isLogged() {
    return !!localStorage.getItem('token');
  };

  getToken(): Observable<any> {
    let token = localStorage.getItem('token');
    if(token) {
      this.token = token;
    }
    else {
      this.token = null;
    }

    return this.token;
  };

  getIdentity(): Observable<any> {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity) {
      this.identity = identity;
    }
    else {
      this.identity = null;
    }

    return this.identity;
  };

  logOutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('identity');
    this.router.navigate(['/login']);
  };
}
