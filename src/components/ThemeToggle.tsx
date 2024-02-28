import { useState } from "react";
import "~/styles/themeToggle.css";

const ThemeToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`toggle-container ${isToggled ? "active" : ""}`}
      onClick={handleToggle}
    >
      <div className="slider"></div>
    </div>
  );
};

export default ThemeToggle;
