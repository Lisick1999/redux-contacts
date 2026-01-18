import { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { ContactCard } from 'src/components/ContactCard';
import { useAppSelector } from 'src/store/hooks';
import { ContactDto, GroupContactsDto } from 'src/types/dto/ContactDto';

export const GroupPage = memo(() => {
  const { groupId: groupIdParam } = useParams<{ groupId: string }>();
  const groupId = groupIdParam ?? '';

  const groups   = useAppSelector(s => s.groups)   as GroupContactsDto[];
  const contacts = useAppSelector(s => s.contacts) as ContactDto[];

  const [group, setGroup] = useState<GroupContactsDto | undefined>();
  const [groupContacts, setGroupContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    if (!groupId) return;

    const found = groups.find(g => g.id === groupId);
    setGroup(found);

    setGroupContacts(
      found
        ? contacts.filter(c => found.contactIds.includes(c.id))
        : []
    );
  }, [groupId, groups, contacts]);

  return (
    <Row className="g-4">
      {group ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupId={groupId} />
              </Col>
            </Row>
          </Col>

          <Col>
            <Row xxl={4} className="g-4">
              {groupContacts.map(c => (
                <Col key={c.id}>
                  <ContactCard contact={c} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
