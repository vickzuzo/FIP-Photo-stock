import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { themeReducer } from "./theme.reducer";

export const reducers = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});


// const state = {
//   auth: {
//     isAuthenticated: false,
//     user: {
//       username: "",
//       token: "",
//       email: ""
//     }
//   },
//   theme: {
//     theme: "light"
//   }
// }
