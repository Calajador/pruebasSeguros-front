import { MultiLanguage } from './itemMenu.model';

export interface Screen {
  id?: string;
  codeModule: string;
  codeScreen: string;
  multilanguage: MultiLanguage[];
}
