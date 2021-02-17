import { Seguro } from './seguro.model';

export interface Persona {
  _id?: string;
  nombre?: string;
  apellidos?: string;
  sex?: string;
  fechaNacimiento?: string;
  indentificacion?: string;
  licenciaConducir?: string;
  telefono?: number;
  email?: string;
  direccion?: string;
  seguro?: Seguro;
}
