import { BsMoonFill, BsSunFill } from "react-icons/bs";
import "/src/style/SwitchTheme.scss";

export const SwitchTheme = ({ toggleTheme, theme }) => {
  return (
    <button onClick={toggleTheme} className="SwitchThemeButton">
      {theme == "light" ? (
        <BsMoonFill className="SwitchThemeButton_icon moon" />
      ) : (
        <BsSunFill className="SwitchThemeButton_icon sun"/>
      )}
    </button>
  );
};
