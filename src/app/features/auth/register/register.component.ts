import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  singUpUser = {
    name:null,
    apellidos: null,
    email: null,
    password: null,
    role: null
  }

  public identity;
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registro() {
    this._auth.signUpUser(this.singUpUser)
      .subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.user));
        this.router.navigate(['/dashboard'])

      },
      err => console.log(err)
      
      )
  }
 s
}
