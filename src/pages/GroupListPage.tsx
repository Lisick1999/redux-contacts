import { memo, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { ContactsContext } from 'src/context/ContactsContext';

export const GroupListPage = memo(() => {
  const { state } = useContext(ContactsContext);
  const { groups } = state;

  return (
    <Row xxl={4}>
      {groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard 
            groupId={groupContacts.id} 
            withLink 
          />
        </Col>
      ))}
    </Row>
  );
});
