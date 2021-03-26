export interface ItemMenu {
  index: number;
  name?: string;
  route?: string;
  icon?: string;
  children?: ItemMenu[];
}
