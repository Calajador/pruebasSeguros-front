import { Injectable } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { ApiSecret } from '../../API/ApiSecret';
import { Observable, throwError } from 'rxjs';
import { Location } from '@angular/common';
import { map, catchError } from 'rxjs/operators';
import { OAuthRequest } from '../../API/models/OAuthRequest.model';
@Injectable({
  providedIn: 'root',
})
export class Inter2Service {
  ban: boolean;
  secret: OAuthRequest;
  failedRequest: HttpRequest<any>;
  constructor(private auth: AuthService) {}

  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): import('rxjs').Observable<HttpEvent<any>> {
  //   let request = req;
  //   this.secret = {
  //     grant_type: ApiSecret.grant_type,
  //     client_id: ApiSecret.client_id,
  //     client_secret: ApiSecret.client_secret,
  //     scope: ApiSecret.scope,
  //   };
  //   let token = localStorage.getItem('token');

  //   request = request.clone({
  //     headers: request.headers.set('X-IBM-Client-Id', ApiSecret.client_id),
  //   });
  //   request = request.clone({
  //     headers: request.headers.set('rejectUnauthorized', 'false'),
  //   });
  //   if (token) {
  //     if (!req.url.includes('oauth2')) {
  //       request = request.clone({
  //         headers: request.headers.set('Authorization', 'Bearer ' + token),
  //       });
  //     }
  //   }

  //   return next.handle(request).pipe(
  //     catchError((err: HttpErrorResponse) => {
  //       //debugger;

  //       if (err.status === 401) {
  //         this.failedRequest = request;
  //         this.getToken(next);
  //       } else if (err.status === 400) {
  //         console.log('Yo ya no se que hacer');
  //       }

  //       return throwError(err);
  //     })
  //   );
  // }

  // async getToken(next) {
  //   let token = '';

  //   await this.auth.getToken2(this.secret).subscribe(
  //     (resp) => {
  //       console.log(resp);
  //       token = resp.access_token;
  //       localStorage.setItem('token', token);

  //       this.failedRequest = this.failedRequest.clone({
  //         headers: this.failedRequest.headers.set(
  //           'Authorization',
  //           'Bearer ' + token
  //         ),
  //       });
  //       location.reload();
  //       return next.handle(this.failedRequest).pipe(
  //         catchError((err: HttpErrorResponse) => {
  //           return throwError(err);
  //         })
  //       );
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );

  //   return token;
  // }
}
