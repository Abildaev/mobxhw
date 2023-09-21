import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';


import {contactsStoreGroups} from "src/mobx/contactsGroupStore";
import {observer} from "mobx-react-lite";


export const GroupListPage = observer(() => {

  return (
      <Row xxl={4}>
        {contactsStoreGroups.allContactsGroup.map((groupContacts) => (
            <Col key={groupContacts.id}>
              <GroupContactsCard groupContacts={groupContacts} withLink />
            </Col>
        ))}
      </Row>
  )
})