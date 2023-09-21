import {createSlice} from "@reduxjs/toolkit";
import {FavoriteContactsDto} from "src/types/dto/FavoriteContactsDto";
import {DATA_CONTACT} from "src/__data__";
import {ContactDto} from "src/types/dto/ContactDto";
import {contactsInitialState} from "src/ducks/contacts";



interface IInitialState {
    favoriteContacts: FavoriteContactsDto,
    contacts: ContactDto[] | []

}


const initialState: IInitialState = {
    favoriteContacts: [
        DATA_CONTACT[0].id,
        DATA_CONTACT[1].id,
        DATA_CONTACT[2].id,
        DATA_CONTACT[3].id
    ],
    contacts: []
}


export const favoriteContactsSlice = createSlice({
    name: 'favoriteContacts',
    initialState,
    reducers: {
        getFavoriteContacts: (state) => {
            state.contacts = contactsInitialState.allContacts.filter(({id}) => state.favoriteContacts.includes(id));
        }
    }
})