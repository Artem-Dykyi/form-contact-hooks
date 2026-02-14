import {createStore, combineReducers} from "redux"
import { contactReducer } from "./reduser"

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = createStore(rootReducer)