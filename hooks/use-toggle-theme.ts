import React from "react";
import { useTheme } from "next-themes";

export const useToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggle = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return { theme: theme as "light" | "dark" | "system", toggle };
};
