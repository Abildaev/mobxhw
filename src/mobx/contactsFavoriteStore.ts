import {FavoriteContactsDto} from "src/types/dto/FavoriteContactsDto";
import {DATA_CONTACT} from "src/__data__";
import {ContactDto} from "src/types/dto/ContactDto";
import {makeAutoObservable} from "mobx";
import {contactsStore} from "src/mobx/contactsStore";

class contactsFavorite {

    favoriteContacts: FavoriteContactsDto = [
        DATA_CONTACT[0].id,
        DATA_CONTACT[1].id,
        DATA_CONTACT[2].id,
        DATA_CONTACT[3].id
    ]
    contacts: ContactDto[] = []


    constructor() {

        makeAutoObservable(this)
    }

    getFavoriteContacts () {
        this.contacts = contactsStore.allContacts.filter(({id}) => this.favoriteContacts.includes(id));
    }

}


export const contactsFavoriteStore = new contactsFavorite()