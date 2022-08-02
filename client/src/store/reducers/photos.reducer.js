import { CREATE_PHOTO } from "../types";

const init_state = {
  photos: [],
};

export const themeReducer = (state = init_state, action) => {
  switch (action.type) {
    case CREATE_PHOTO:
      return {
        ...state,
        photos: state.push(action.photo),
      };
    default:
      return state;
  }
};
