import {contactSlice} from "src/ducks/contacts/slice";


export const contactsReducer = contactSlice.reducer;

export const contactsInitialState = contactSlice.getInitialState()

export const {findContacts, getOneContact} = contactSlice.actions

