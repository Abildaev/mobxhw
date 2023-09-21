import {configureStore} from "@reduxjs/toolkit";

import {groupContactsReducer} from "src/ducks/groupContacts";
import {contactsReducer} from "src/ducks/contacts";
import {favoriteContactsReducer} from "src/ducks/favoriteContacts";


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        groupContacts: groupContactsReducer,
        favoriteContacts: favoriteContactsReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch