import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="taskmate-logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector"></div>
    </header>
  );
};

export default Header;
