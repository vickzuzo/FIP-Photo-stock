import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../store/actions";
import { StyledToggleButton } from "./styles";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Theme } from "../../styles/GlobalStyles";

const ThemeToggler = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(changeTheme(theme.theme === "light" ? "dark" : "light"));
  };
  return (
    <StyledToggleButton onClick={handleThemeChange} currentTheme={theme.theme}>
      {theme.theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
    </StyledToggleButton>
  );
};

export default ThemeToggler;
