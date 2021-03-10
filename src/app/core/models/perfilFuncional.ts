import { Funcionalidad } from './funcionalitie.model';

export interface PF {
  code?: string;
  nombre?: string;
  estado?: string;
  addDate?: Date;
  funcionalidades?: Funcionalidad[];
}
