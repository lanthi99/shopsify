import React from "react";
import light from "../../assets/light.png";
import dark from "../../assets/dark.png";

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        src={light}
        alt="Light"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_2px_black]  transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={dark}
        alt="Dark"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_black]  transition-all duration-300 "
      />
    </div>
  );
};

export default Darkmode;
