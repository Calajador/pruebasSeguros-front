import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private _auth: AuthService,
    private _alerts: AlertsService,
    private _translate: TranslateService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this._auth.getToken(),
      //Habrá que mandar tambien el idioma desde el translate service
      Mensaje: 'HOLA',
    });

    const reqClone = req.clone({
      headers,
    });

    return next.handle(reqClone).pipe(
      catchError((error: HttpErrorResponse) => {
        let mensaje = error.error.mensaje;
        console.log(mensaje);
        this._alerts.mensajeError('Error', mensaje);
        return throwError(error);
      })
    );
  }
}
