import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from '../pages/Reducer'

export const store = createStore(reducer, applyMiddleware(thunk))