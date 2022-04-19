import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from './reducers/categoryReducer'


const combineReducer = combineReducers({ categoryReducer })

export const store = createStore(combineReducer, applyMiddleware(thunk))