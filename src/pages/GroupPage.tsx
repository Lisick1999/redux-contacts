import { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactsContext } from 'src/context/ContactsContext';
import { useContext } from 'react';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto, GroupContactsDto } from 'src/types/dto/ContactDto';

export const GroupPage = memo(() => {
  const { groupId: groupIdParam } = useParams<{ groupId: string }>();
  const { state } = useContext(ContactsContext);
  const { groups, contacts } = state;
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();
  const [groupContactsContacts, setGroupContactsContacts] = useState<ContactDto[]>([]);

  const groupId = groupIdParam ?? '';

  useEffect(() => {
    if (!groupId) return;

    const foundGroup = groups.find((group) => group.id === groupId);
    setGroupContacts(foundGroup);

    if (foundGroup) {
      const filteredContacts = contacts.filter((contact) => 
        foundGroup.contactIds.includes(contact.id)
      );
      setGroupContactsContacts(filteredContacts);
    } else {
      setGroupContactsContacts([]);
    }
  }, [groupId, groups, contacts]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                {groupId && <GroupContactsCard groupId={groupId} />}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {groupContactsContacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink /> {/* Изменено contactId на contact */}
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : <Empty />}
    </Row>
  );
});