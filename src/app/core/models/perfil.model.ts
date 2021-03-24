import { PerfilFuncional } from './perfilFuncional.model';

export interface Perfil {
  _id?: string;
  code?: string;
  nombre?: string;
  descripcion?: string;
  observaciones?: string;
  perfilFuncional?: PerfilFuncional;
}
