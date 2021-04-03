import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext();

const darkTheme = {
  name: "dark",
  color: "var(--white)",
  backgroundColor: "var(--black)",
};

const lightTheme = {
  name: "light",
  color: "var(--black)",
  backgroundColor: "var(--white)",
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  function changeTheme(selectedTheme) {
    if (selectedTheme === "dark") {
      return setTheme(lightTheme);
    }
    if (selectedTheme === "light") {
      return setTheme(darkTheme);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
