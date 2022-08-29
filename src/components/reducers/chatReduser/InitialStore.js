import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatsReducer } from './ChatsReducer'
import { messageReducer } from "./MessageReducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";

const persistConfig = {
    key: 'root',
    storage
}

const logger = store => next => action => {
    const delay = action?.meta?.delay;
    if (!delay) {
        return next(action)
    }
    const timout = setTimeout(() => next(action), delay)
    return () => {
        clearTimeout(timout)
    }
}

const reducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer
})


const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(logger))
export const persist = persistStore(store)