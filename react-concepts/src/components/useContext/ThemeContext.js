// ThemeContext.js
import React, { useState, createContext, useContext } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// we need an initial state for the application or the component or whatever,
// we're going to use this intitialState later when we create a context :)
const initialState = {
  theme: themes.light,
  setTheme: () => {},
};
const ThemeContext = createContext(initialState);

//
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme is a custom hook in which we use the useContext hook which allows us to use the theme
// and the setTheme variables and functions outside of this file. like in other components ;)
const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
export default useTheme;
