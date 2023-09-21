import {makeAutoObservable} from "mobx";
import {ContactDto} from "src/types/dto/ContactDto";
import {DATA_CONTACT} from "src/__data__";
import {contactsStoreGroups} from "src/mobx/contactsGroupStore";



class Contacts {
    allContacts: ContactDto[] = DATA_CONTACT
    contacts: ContactDto[] = DATA_CONTACT
    oneContact: ContactDto | null = null

    constructor() {
        makeAutoObservable(this)
    }

    findContacts({name, groupId}:{name?: string, groupId?: string }){
        if (name) {
            const fvName = name.toLowerCase();
            this.contacts = this.allContacts.filter(({name}) => (
                name.toLowerCase().indexOf(fvName) > -1
            ))
            return
        }
        if (groupId) {
            const groupContacts = contactsStoreGroups.allContactsGroup.find(({id}) => id === groupId);
            if (groupContacts) {
                this.contacts = this.allContacts.filter(({id}) => (
                    groupContacts.contactIds.includes(id)
                ))
            }
            return;
        }
        this.contacts = this.allContacts
    }

    getOneContact(contactId: string) {
        const foundContact = this.allContacts.find(({id}) => id === contactId);
        if(foundContact) {
            this.oneContact = foundContact
        }else {
            this.oneContact = null
        }
    }


}



export const contactsStore = new Contacts()