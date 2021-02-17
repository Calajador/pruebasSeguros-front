import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WebReqService } from 'src/app/core/services/web-req.service';

@Injectable({
  providedIn: 'root'
})
export class SegurosService {

  constructor(private _web: WebReqService) { }

  getSeguros() {
    return this._web.get('seguros')
      .pipe(
        map((res: any) => res.seguros)
      )
  }
}
