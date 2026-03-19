import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// TEMP placeholder (you’ll replace with real context later)
const ThemeContext = React.createContext();

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext) || {
    theme: "light",
    toggleTheme: () => {},
  };

  return (
    <nav className={theme === "light" ? "navbar-light" : "navbar-dark"}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;