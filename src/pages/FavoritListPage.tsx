import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';



import {observer} from "mobx-react-lite";
import {contactsFavoriteStore} from "src/mobx/contactsFavoriteStore";
import {contactsStore} from "src/mobx/contactsStore";

export const FavoritListPage = observer(() => {
  useEffect(() => {
    contactsFavoriteStore.getFavoriteContacts()
  }, [contactsStore.allContacts, contactsFavoriteStore.favoriteContacts])
  return (
      <Row xxl={4} className="g-4">
        {contactsFavoriteStore.contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
        ))}
      </Row>
  );
})