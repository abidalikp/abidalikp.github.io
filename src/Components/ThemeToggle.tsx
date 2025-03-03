import React from "react";
import SunIcon from "../assets/icons/Sun";

const ThemeToggle = (): React.ReactNode => {
  return (
    <div
      onClick={() => {
        document.getElementById("root")?.classList.toggle("light");
      }}
      className="w-fit cursor-pointer border rounded-lg p-2 hover:bg-tertiary"
    >
      <SunIcon fill={"var(--primary)"} />
    </div>
  );
};

export default ThemeToggle;
