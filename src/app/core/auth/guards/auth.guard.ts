import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private _auth: AuthService) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (this._auth.isLogged()) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
      return false;
    }
  }

  canActivate(): boolean {
    if (this._auth.isLogged()) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
