import { combineReducers, createStore } from "redux";
import { chatsReducer } from './ChatsReducer'
import { messageReducer } from "./MessageReducer";

const reducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer
})

export const store = createStore(reducer)