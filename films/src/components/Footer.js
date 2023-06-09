import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";
export default function Footer() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        position: "fixed",
        bottom: '0',
        width:'100%',
        zIndex: '1'
      }}
    >
      Hehehe
    </div>
  );
}
