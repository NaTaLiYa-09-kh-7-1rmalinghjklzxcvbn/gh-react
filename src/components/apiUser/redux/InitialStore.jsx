import { applyMiddleware, legacy_createStore } from "redux";
import { UsersReducer } from "./UsersReducer";
import thunk from "redux-thunk";

export const store = legacy_createStore(UsersReducer, applyMiddleware(thunk))