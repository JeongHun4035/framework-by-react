import "~/styles/menu.css";
import { dataList } from "~/mock/menus.json";
import { useEffect, useState } from "react";
import { IMenu } from "~/types/menu";

const Menus = () => {
  const [menuList, setMenu] = useState<IMenu[]>([]);
  useEffect(() => {
    const buildMenuHierarchy = (
      parentId: string | undefined = "#"
    ): IMenu[] => {
      return dataList
        .filter((item) => item.parentId === parentId)
        .map((item) => ({
          ...item,
          children: buildMenuHierarchy(item.menuId),
          expanded: false,
        }));
    };

    const menus = buildMenuHierarchy();
    setMenu(menus);
  }, []);

  const toggleMenu = (menuId: string) => {
    setMenu((prevMenuList) =>
      prevMenuList.map((menu) =>
        menu.menuId === menuId
          ? { ...menu, expanded: !menu.expanded }
          : menu.children && menu.children.length > 0
          ? toggleSubMenu(menu, menuId)
          : menu
      )
    );
  };

  const toggleSubMenu = (menu: IMenu, targetMenuId: string): IMenu => {
    return {
      ...menu,
      children: menu.children.map((childMenu) =>
        childMenu.menuId === targetMenuId
          ? { ...childMenu, expanded: !childMenu.expanded }
          : toggleSubMenu(childMenu, targetMenuId)
      ),
    };
  };

  const renderMenu = (menus: IMenu[]) => {
    return menus.map((menu) => (
      <div className="menu" key={menu.menuId}>
        {menu.parentId === "#" ? (
          <h1 onClick={() => toggleMenu(menu.menuId)}>{menu.menuTitle}</h1>
        ) : (
          <span onClick={() => toggleMenu(menu.menuId)}> {menu.menuTitle}</span>
        )}
        {menu.expanded && menu.children && renderMenu(menu.children)}
      </div>
    ));
  };

  return <div className="menus-wrapper">{renderMenu(menuList)}</div>;
};

export default Menus;
