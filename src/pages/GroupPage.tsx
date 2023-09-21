import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';


import {contactsStoreGroups} from "src/mobx/contactsGroupStore";
import {observer} from "mobx-react-lite";

export const GroupPage = observer(() => {
  const {groupId} = useParams<{ groupId: string }>();


  useEffect(() => {
    if(groupId){
      contactsStoreGroups.getOneGroup(groupId)
    }
  }, [groupId]);

  return (
      <Row className="g-4">
        {contactsStoreGroups.oneContactGroup ? (
            <>
              <Col xxl={12}>
                <Row xxl={3}>
                  <Col className="mx-auto">
                    <GroupContactsCard groupContacts={contactsStoreGroups.oneContactGroup} />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row xxl={4} className="g-4">
                  {contactsStoreGroups.contacts.map((contact) => (
                      <Col key={contact.id}>
                        <ContactCard contact={contact} withLink />
                      </Col>
                  ))}
                </Row>
              </Col>
            </>
        ) : <Empty />}
      </Row>
  );
});