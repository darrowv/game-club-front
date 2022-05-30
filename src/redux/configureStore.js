import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from "./reducers/categoryReducer";
import { NewsReducer } from "./reducers/newsReducer";
import { CommentsReducer } from "./reducers/commentsReducer";
import { messageReducer } from "./reducers/messageReducer";
import { barReducer } from "./reducers/barReducer";
import { PlaceReducer } from "./reducers/PlaceReducer";
import { PsReducer } from "./reducers/PsReduser";
import { VipReducer } from "./reducers/VipReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const combineReducer = combineReducers({ categoryReducer, messageReducer, barReducer, NewsReducer, CommentsReducer, PlaceReducer, PsReducer, VipReducer });

export const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(thunk)));
