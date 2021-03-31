import { MultiLanguage } from './itemMenu.model';

export interface Ramo {
  tipo: string;
  codigo: string;
  nombres: MultiLanguage[];
  compañia: string;
  ssn: string[];
  contable: number;
  fechaInicio: Date;
  fechaFin?: Date;
  motivoBaja?: string;
}
