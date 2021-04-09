import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WebReqService } from 'src/app/core/services/web-req.service';

@Injectable({
  providedIn: 'root',
})
export class RamosService {
  constructor(private _web: WebReqService) {}

  getRamos() {
    return this._web.get('ramos').pipe(map((res: any) => res.ramos));
  }
  postRamos(data) {
    return this._web.post('ramos/registrar', data);
  }
  putRamo(id, data) {
    return this._web.patch('ramos/editar/' + id, data);
  }
}
