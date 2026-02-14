export const addContact = (contact) =>({
    type: "addContact",
    payload: contact
})

export const deleteContact = (id) =>({
    type: "deleteContact",
    payload: id
})

export const setFilter = (value) => ({
    type: "setFilter",
    payload: value
})