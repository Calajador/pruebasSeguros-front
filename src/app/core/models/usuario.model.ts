import { Perfil } from './perfil.model';

export interface Usuario {
  _id?: string;
  usuario?: string;
  nombre?: string;
  email?: string;
  password?: string;
  estado?: string;
  idioma?: string;
  addDate?: Date;
  perfil?: Perfil;
}
