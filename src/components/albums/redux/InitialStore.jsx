import { applyMiddleware, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { AlbumsReducer } from './AlbumsReducer'

export const store = legacy_createStore(AlbumsReducer, applyMiddleware(thunk)) 