/*import contact from "../contacts.json"

const initialState = {
    contacts: contact,
    filter: ""
}

export const contactReducer = (state = initialState, action )=>{
    switch(action.type){
        case "addContact":
            return{
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case "deleteContact":
            return{
                ...state,
                contacts: state.contacts.filter(
                    (c) => c.id !== action.payload
                )
            }

        case "setFilter":
            return {
                ...state,
                filter: action.payload
            }
        
        default:
            return state
    }
}
*/

//було
// -->
//переробив 

import {addContact, deleteContact, setFilter} from "./action"
import contact from "../contacts.json"

const contactsInitialState = contact;

export const contactsReducer = (state = contactsInitialState, action)=>{
    switch(action.type){
        case addContact.type:
            return [...state, action.payload];

        case deleteContact.type:
            return state.filter(
                contact => contact.id !== action.payload);
        default:
            return state;
    }
}


const filterInitialState = ""

export const filterRecuder = (state = filterInitialState, action)=>{
    switch(action.type){
        case setFilter.type:
            return action.payload;
        default:
            return state
    }

}

