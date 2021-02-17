import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertsService } from '../../../shared/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser = {
    email: null,
    password: null,
  }
  public data_error: string;
  public identity

  constructor(private _auth: AuthService, private router: Router,
     private _alerts: AlertsService) { 
    this.identity = this._auth.getIdentity();
  }

  ngOnInit(): void {
    if(this.identity) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    this._auth.loginUser(this.loginUser)
      .subscribe(res=> {
        console.log(res)
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.user));
        this.router.navigate(['/'])
      },(error) => {
        this._alerts.mensajeError('Error', 'problemita' )
      })
  };

}
