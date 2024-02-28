import "~/styles/header.css";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { useState } from "react";
import Menus from "./Menus";

const Header = () => {
  const [menuActivate, setMenuActivate] = useState<boolean>(false);
  const handleMenu = () => {
    setMenuActivate((prevState) => !prevState);
  };
  return (
    <>
      <div className="header-wrapper">
        <div className="header-items">
          <RxHamburgerMenu onClick={handleMenu} />
        </div>
        <div className="header-items">
          <RxAvatar />
        </div>
      </div>
      <div className={`menu-container ${menuActivate ? "active" : ""}`}>
        {<Menus />}
      </div>
    </>
  );
};

export default Header;
