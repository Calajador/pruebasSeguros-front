export interface Branch {
  idBranch?: string; // id del ramo con id {id}
  code?: string; // código del ramo con id {id}
  ssnCodes?: SSN;
  names?: BranchNames[];
  idCompany?: string; // Código compañía a la que pertenece el ramo.
  company?: string; // Nombre compañía a la que pertenece el ramo.
  classificationCode?: string; // Código tipo de clasificación.
  clasificationType?: string; // Nombre tipo de clasificación.
  stateCode?: string; // Código de Estado en el que se encuentra el ramo.
  state?: string; // Nombre de estado en el que se encuentra el ramo.
  effectDateIni?: Date; // Data de efecto inicial ramo.
  effectDateEnd?: Date; // Data de efecto final del ramo.
  motiveDescriptionLeaving?: string; // Motivo de la baja del ramo.
  accountCode?: string; // Código contable del ramo.
  approbationModality?: string;
  approbationDate?: string;
  expedientNumber?: number;
  expedientNumberOutCompany?: number;
  ssnExpedientNumber?: number;
  companyName?: string;
  tramitNumber?: number;
  //Falta resolutions y notifications
}

export interface SSN {
  idSsnCode?: string;
  SSNCode?: string;
  name?: string;
}

export interface BranchNames {
  codIdiomCountry?: string;
  name?: string;
}

export interface ClassificationsTypes {
  code?: string;
  name?: string;
}

export interface Company {
  code?: String;
  name?: String;
}
