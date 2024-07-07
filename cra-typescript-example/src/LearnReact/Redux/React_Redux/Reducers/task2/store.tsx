import { createStore } from "redux";
import { reducers } from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

// @ts-ignore
export const store = createStore(reducers, composeWithDevTools())