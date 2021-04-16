import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  lang: string;
  constructor(
    private _auth: AuthService,
    private _alerts: AlertsService,
    private _translate: TranslateService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let multilang = this._translate.currentLang;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this._auth.getToken(),
      //Habrá que mandar tambien el idioma desde el translate service
      Mensaje: 'es-ES',
    });

    const reqClone = req.clone({
      headers,
    });

    return next.handle(reqClone).pipe(
      catchError((error: HttpErrorResponse) => {
        let mensaje = error.error.mensaje;
        console.log(mensaje);
        console.log(this._translate.currentLang);
        this._alerts.mensajeError('Error', mensaje);
        return throwError(error);
      })
    );
  }
}
