import { Funcionalidad } from './funcionalitie.model';

export interface Modulo {
  name?: string;
  children?: Modulo[];
  funcionalidades?: Funcionalidad[];
}
