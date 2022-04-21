import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { applicationReducer } from "./reducers/application";
import { categoryReducer } from "./reducers/categoryReducer";
import { NewsReducer } from "./reducers/newsReducer";
import { CommentsReducer } from "./reducers/commentsReducer";

const combineReducer = combineReducers({ categoryReducer, NewsReducer,  CommentsReducer});

import { messageReducer } from "./reducers/messageReducer";
import { barReducer } from "./reducers/barReducer";

const combineReducer = combineReducers({ categoryReducer, messageReducer, barReducer, applicationReducer });

export const store = createStore(combineReducer, applyMiddleware(thunk));
