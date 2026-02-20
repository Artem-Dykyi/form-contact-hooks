/*import {createStore, combineReducers} from "redux"
import { contactReducer } from "./reduser"

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = createStore(rootReducer)*/

//було
// -->
//переробив 
import {configureStore} from "@reduxjs/toolkit"
import {contactsReducer, filterRecuder} from "./reduser"
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters:filterRecuder,
  }
})