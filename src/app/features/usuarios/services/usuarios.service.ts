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

  getPerfilesFuncionales() {
    return this._web.get('pf').pipe(map((res: any) => res.pf));
  }

  postPerfilFunciona(data) {
    return this._web.post('pf/registrar', data);
  }

  postUsuario(data) {
    return this._web.post('registrar', data);
  }

  postPerfil(data) {
    return this._web.post('perfil/registrar', data);
  }

  editUsuario(id, data) {
    return this._web.patch('usuarios/editar/' + id, data);
  }

  editPerfil(id, data) {
    return this._web.patch('perfil/editar/' + id, data);
  }

  editarPerfilFuncional(id, data) {
    return this._web.patch('pf/editar/' + id, data);
  }
}
