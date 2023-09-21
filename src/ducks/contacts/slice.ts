import {ContactDto} from "src/types/dto/ContactDto";
import {DATA_CONTACT} from "src/__data__";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { groupContactsInitialState} from "src/ducks/groupContacts";

interface IInitialState {
    allContacts: ContactDto[]
    contacts: ContactDto[],
    oneContact: ContactDto | null
}

const initialState: IInitialState = {
    allContacts: DATA_CONTACT,
    contacts: DATA_CONTACT,
    oneContact: null
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        findContacts:  (state, action: PayloadAction<{ name?: string, groupId?: string }>) => {


            if (action.payload.name) {
                const fvName = action.payload.name.toLowerCase();
                state.contacts = state.allContacts.filter(({name}) => (
                    name.toLowerCase().indexOf(fvName) > -1
                ))
                return
            }
            if (action.payload.groupId) {
                  const groupContacts = groupContactsInitialState.allContactsGroup.find(({id}) => id === action.payload.groupId);
                  if (groupContacts) {
                      state.contacts = state.allContacts.filter(({id}) => (
                      groupContacts.contactIds.includes(id)
                    ))
                  }
                return;
            }
            state.contacts = state.allContacts
        },
        getOneContact: (state, action: PayloadAction<{contactId: string}>) => {
                const foundContact = state.allContacts.find(({id}) => id === action.payload.contactId);
                if(foundContact) {
                    state.oneContact = foundContact
                }else {
                    state.oneContact = null
                }
        },

    }
})