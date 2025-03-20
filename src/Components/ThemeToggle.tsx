import React from "react";
import SunIcon from "../assets/icons/Sun";
import { IconButton } from "./Button";

const ThemeToggle = (): React.ReactNode => {
  return (
    <IconButton
      onClick={() => {
        document.getElementById("root")?.classList.toggle("light");
      }}
    >
      <SunIcon fill={"var(--primary)"} />
    </IconButton>
  );
};

export default ThemeToggle;
