import { LOGIN } from "../types";

const init_state = {
  isAuthenticated: false,
  user: {},
};

export const authReducer = (state = init_state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
