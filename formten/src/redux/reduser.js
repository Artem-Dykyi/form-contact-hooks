import contact from "../contacts.json"

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