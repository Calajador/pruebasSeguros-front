export interface ItemMenu {
  order: number;
  level: number;
  father: father;
  name?: string;
  route?: string;
  icon?: string;
  children?: ItemMenu[];
}

export interface father {
  order: number;
  level: number;
}

export interface MultiLanguage {
  pais: string;
  nombre: string;
}

export interface Menu {
  name: string;
  description: string;
  tree: ItemMenu;
}
