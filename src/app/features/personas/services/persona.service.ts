import { Injectable } from '@angular/core';
import { Persona } from 'src/app/core/models/persona.model';
import { WebReqService } from '../../../core/services/web-req.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(private _web: WebReqService) {}

  getPersonas(): Observable<Persona> {
    return this._web.get('personas').pipe(map((res: any) => res.personas));
  }

  postPersona(data) {
    return this._web.post('personas/registrar', data);
  }

  editPersona(id, data) {
    return this._web.patch('personas/editar/' + id, data);
  }

  deletePersona(id) {
    return this._web.delete('personas/eliminar/' + id);
  }
}
