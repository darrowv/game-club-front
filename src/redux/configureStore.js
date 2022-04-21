import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from "./reducers/categoryReducer";
import { messageReducer } from "./reducers/messageReducer";
import { barReducer } from "./reducers/barReducer";

const combineReducer = combineReducers({ categoryReducer, messageReducer, barReducer });

export const store = createStore(combineReducer, applyMiddleware(thunk));
