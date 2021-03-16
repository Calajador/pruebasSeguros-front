import { PerfilFuncional } from './perfilFuncional.model';

export interface Perfil {
  code?: string;
  nombre?: string;
  descripcion?: string;
  observaciones?: string;
  perfilFuncional?: PerfilFuncional;
}
