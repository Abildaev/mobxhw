import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';


import {observer} from "mobx-react-lite";
import {contactsStore} from "src/mobx/contactsStore";
import {contactsStoreGroups} from "src/mobx/contactsGroupStore";


export const ContactListPage = observer(() => {
    const onSubmit = (fv: Partial<FilterFormValues>) => {
        if (fv) {
            contactsStore.findContacts(fv)
        }
    }

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm groupContactsList={contactsStoreGroups.allContactsGroup} initialValues={{}} onSubmit={onSubmit}/>
            </Col>
            <Col>
                <Row xxl={4} className="g-4">
                    {contactsStore.contacts.map((contact) => (
                        <Col key={contact.id}>
                            <ContactCard contact={contact} withLink/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
})