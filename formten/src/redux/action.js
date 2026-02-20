/*export const addContact = (contact) =>({
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
})*/

import { createAction } from "@reduxjs/toolkit";
export const addContact = createAction("contacts/addContact")
export const deleteContact = createAction("contacts/deleteContact")
export const setFilter = createAction("filters/setFilter")