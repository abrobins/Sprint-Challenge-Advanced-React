import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode("Dark Mode Setting");

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar" data-testid="navbar">
      <h1>World Cup App</h1>
      <div className="dark-mode__toggle" data-testid="dark-mode-toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default NavBar;
