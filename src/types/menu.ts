export interface IMenu {
  parentId: string;
  menuId: string;
  menuTitle: string;
  children?: IMenu[];
  expanded?: boolean;
}
