import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this._auth.getToken()
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone ).pipe(
      catchError( this.manejarError )
    );
  }

  manejarError( error: HttpErrorResponse ) {
    console.log('Sucedió un error');
    console.log('Registrado en el log file');
    console.log(error.error.mensaje);
    console.warn(error);
    return throwError('Error personalizado');
  }


}
