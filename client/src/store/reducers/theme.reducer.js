import { CHANGE_THEME,SWITCH_LIGHT } from "../types";

const init_state = {
  theme: "light",
};

export const themeReducer = (state = init_state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
  case SWITCH_LIGHT:
    return {
      ...state,
      theme: action.payload
    }
    default:
      return state;
  }
};
