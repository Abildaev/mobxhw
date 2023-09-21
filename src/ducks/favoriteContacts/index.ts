import {favoriteContactsSlice} from "src/ducks/favoriteContacts/slice";



export const favoriteContactsReducer = favoriteContactsSlice.reducer

export const {getFavoriteContacts} = favoriteContactsSlice.actions