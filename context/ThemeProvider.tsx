"use client";

import {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  useContext,
  useCallback,
} from "react";

type ThemeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState("");

  const handleThemeMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };

  //   useEffect(() => {
  //     console.log("infinite rendering");
  //     handleThemeMode();
  //   }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }

  return context;
};
