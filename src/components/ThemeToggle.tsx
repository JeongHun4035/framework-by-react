import { useState } from "react";
import "~/styles/ThemeToggle.css";

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
