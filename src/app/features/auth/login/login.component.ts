import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertsService } from '../../../shared/services/alerts.service';
import { ApiSecret } from 'src/app/core/API/ApiSecret';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  secret: any;
  loginUser = {
    email: null,
    password: null,
  };
  public data_error: string;
  public identity;

  constructor(
    private _auth: AuthService,
    private router: Router,
    private _alerts: AlertsService
  ) {
    this.identity = this._auth.getIdentity();
  }

  ngOnInit(): void {
    if (this.identity) {
      this.router.navigate(['dashboard']);
    }

    // this.getToken();
  }

  login() {
    this._auth.loginUser(this.loginUser).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.user));
        this.router.navigate(['/']);
      },
      (error) => {
        this._alerts.mensajeError('Error', 'problemita');
      }
    );
  }

  // getToken() {
  //   this.secret = {
  //     grant_type: ApiSecret.grant_type,
  //     client_id: ApiSecret.client_id,
  //     client_secret: ApiSecret.client_secret,
  //     scope: ApiSecret.scope,
  //   };
  //   this._auth.getToken2(this.secret).subscribe(
  //     (res) => {
  //       console.log(res);
  //       // localStorage.setItem('token', res.access_token);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // login2() {
  //   this._auth.loginUser2(this.loginUser).subscribe(
  //     (res) => {
  //       console.log('Va pa ante');
  //     },
  //     (error) => {
  //       console.log(error);
  //       this._alerts.mensajeError('Error', 'problemita');
  //     }
  //   );
  // }
}
