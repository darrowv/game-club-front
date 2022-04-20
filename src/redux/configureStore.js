import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { applicationReducer } from "./reducers/application";
import { categoryReducer } from "./reducers/categoryReducer";

const combineReducer = combineReducers({ categoryReducer, applicationReducer });

export const store = createStore(combineReducer, applyMiddleware(thunk));
