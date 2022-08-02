import { CHANGE_THEME } from "../types";

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});

export const changeLight = () => ({
  type: CHANGE_THEME,
  payload: "light"
});
