import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { applicationReducer } from "./reducers/application";
import { categoryReducer } from "./reducers/categoryReducer";
import { messageReducer } from "./reducers/messageReducer";
import { barReducer } from "./reducers/barReducer";
import { PlaceReducer } from "./reducers/PlaceReducer";

const combineReducer = combineReducers({ categoryReducer, messageReducer, barReducer, applicationReducer, PlaceReducer });

export const store = createStore(combineReducer, applyMiddleware(thunk));
