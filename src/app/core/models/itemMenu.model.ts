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
