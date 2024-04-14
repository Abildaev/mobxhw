import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';

import {observer} from "mobx-react-lite";
import {contactsStore} from "src/mobx/contactsStore";


// test commit

export const ContactPage = observer(() => {
    const {contactId} = useParams<{ contactId: string }>();


    useEffect(() => {
        if(contactId) {
            contactsStore.getOneContact(contactId)
        }
    }, [contactId]);

    return (
        <Row xxl={3}>
            <Col className={'mx-auto'}>
                {contactsStore.oneContact ? <ContactCard contact={contactsStore.oneContact} /> : <Empty />}
            </Col>

        </Row>
    );
})