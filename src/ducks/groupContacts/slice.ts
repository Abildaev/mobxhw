import {GroupContactsDto} from "src/types/dto/GroupContactsDto";
import {DATA_GROUP_CONTACT} from "src/__data__";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ContactDto} from "src/types/dto/ContactDto";
import {contactsInitialState} from "src/ducks/contacts";

interface IInitialState {
    allContactsGroup: GroupContactsDto[],
    oneContactGroup: GroupContactsDto | null
    contacts: ContactDto[] | []

}

const initialState: IInitialState = {
    allContactsGroup: DATA_GROUP_CONTACT,
    oneContactGroup: null,
    contacts: []

}

export const groupContactsSlice = createSlice({
    name: 'groupContacts',
    initialState,
    reducers: {
        getOneGroup: (state, action: PayloadAction<{groupId: string}>): any  =>  {
            const findGroup = state.allContactsGroup.find(({id}) => id === action.payload.groupId);
            if(findGroup) {
                state.oneContactGroup = findGroup
                state.contacts = contactsInitialState.allContacts.filter(({id}) => findGroup.contactIds.includes(id))
            }else {
                state.oneContactGroup = null
                state.contacts = []
            }
        }
    }
})














