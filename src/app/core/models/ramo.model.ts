import { MultiLanguage } from './itemMenu.model';

export interface Ramo {
  _id?: string;
  tipo: string;
  codigo: string;
  nombres: MultiLanguage[];
  compañia: string;
  ssn: string[];
  contable: number;
  fechaInicio: Date;
  fechaFin?: Date;
  motivoBaja?: string;
  approbationModality?: string;
  approbationDate?: string;
  expedientNumber?: number;
  expedientNumberOutCompany?: number;
  ssnExpedientNumber?: number;
  companyName?: string;
  tramitNumber?: number;

  //Falta resolutions y notifications
}
