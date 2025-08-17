import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "mylight"
  );

  const toggleTheme = () => {
    setTheme(theme === "mylight" ? "mydark" : "mylight");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme} className="btn btn-outline">
      {theme === "mylight" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
