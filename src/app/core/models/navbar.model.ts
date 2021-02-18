export interface NavItem {
  displayName?: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  expansion?: boolean;
  children?: NavItem[];
}
