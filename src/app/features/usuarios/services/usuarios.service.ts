import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WebReqService } from 'src/app/core/services/web-req.service';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private _web: WebReqService) {}

  getPerfiles() {
    return this._web.get('perfil').pipe(map((res: any) => res.pf));
  }

  getUsuarios() {
    return this._web.get('usuarios').pipe(map((res: any) => res.users));
  }

  postUsuario(data) {
    return this._web.post('registrar', data);
  }

  editUsuario(id, data) {
    return this._web.patch('usuarios/editar/' + id, data);
  }
}
