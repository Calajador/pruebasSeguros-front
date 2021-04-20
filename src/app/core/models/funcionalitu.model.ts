import { MultiLanguage } from './itemMenu.model';

export interface Funcionality {
  id?: string;
  codeFunctionality?: string;
  nameFunctionality?: string;
  multilanguage?: MultiLanguage[];
  codeGroup?: string;
  nameGroup?: string;
  codeSubmodule?: string;
  nameSubmodule?: string;
  codeModule?: string;
  nameModule?: string;
  state?: string;
  addDate?: string;
}
