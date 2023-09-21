import {DATA_GROUP_CONTACT} from "src/__data__";
import {makeAutoObservable} from "mobx";
import {GroupContactsDto} from "src/types/dto/GroupContactsDto";
import {ContactDto} from "src/types/dto/ContactDto";
import {contactsStore} from "src/mobx/contactsStore";






class ContactsGroups {
    allContactsGroup: GroupContactsDto[] = DATA_GROUP_CONTACT
    oneContactGroup: GroupContactsDto | null = null
    contacts: ContactDto[]  = []
    constructor() {
        makeAutoObservable(this)
    }


    getOneGroup(groupId: string) {
        const findGroup = this.allContactsGroup.find(({id}) => id === groupId);
        if(findGroup) {
            this.oneContactGroup = findGroup
            this.contacts = contactsStore.allContacts.filter(({id}) => findGroup.contactIds.includes(id))
        }else {
            this.oneContactGroup = null
            this.contacts = []
        }

    }

}



export const contactsStoreGroups = new ContactsGroups()