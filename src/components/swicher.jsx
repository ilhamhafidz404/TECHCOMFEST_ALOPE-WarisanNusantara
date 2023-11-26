// Filename - Components/Switcher.js

// import { DarkModeSwitch } from "react-toggle-dark-mode";
import { MdDarkMode } from "react-icons/md";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
  };

  return (
    <>
      <MdDarkMode
        // checked={darkSide}
        // onChange={toggleDarkMode}
        onClick={toggleDarkMode}
        size={20}
      />
    </>
  );
}
