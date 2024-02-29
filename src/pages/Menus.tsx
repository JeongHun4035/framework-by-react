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
        }));
    };

    const menus = buildMenuHierarchy();
    setMenu(menus);
  }, []);

  const renderMenu = (menus: IMenu[]) => {
    return menus.map((menu) => (
      <div className="menu" key={menu.menuId}>
        {menu.parentId === "#" ? (
          <h1>{menu.menuTitle}</h1>
        ) : (
          <span> - {menu.menuTitle}</span>
        )}
        {menu.children && renderMenu(menu.children)}{" "}
      </div>
    ));
  };

  return <div className="menus-wrapper">{renderMenu(menuList)}</div>;
};

export default Menus;
