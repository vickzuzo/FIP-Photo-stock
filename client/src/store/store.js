import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore } from "redux";
import { reducers } from "./reducers";

// Create a store

export const store = legacy_createStore(reducers, composeWithDevTools());
