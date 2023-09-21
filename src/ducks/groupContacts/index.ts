import {groupContactsSlice} from "src/ducks/groupContacts/slice";


export const groupContactsReducer = groupContactsSlice.reducer
export  const {getOneGroup} = groupContactsSlice.actions


export const groupContactsInitialState = groupContactsSlice.getInitialState()