import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from "./reducers/categoryReducer";
import { NewsReducer } from "./reducers/newsReducer";
import { CommentsReducer } from "./reducers/commentsReducer";

const combineReducer = combineReducers({ categoryReducer, NewsReducer,  CommentsReducer});

export const store = createStore(combineReducer, applyMiddleware(thunk));
