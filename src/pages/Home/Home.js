import React, { useContext } from "react";

// TEMP placeholder (replace with real ThemeContext later)
const ThemeContext = React.createContext();

function Home() {
  const { theme } = useContext(ThemeContext) || { theme: "light" };

  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={styles}>
      <h1>Welcome to the Home Page</h1>
      <p>
        This is a simple React app demonstrating routing and theme switching.
      </p>
    </div>
  );
}

export default Home;
