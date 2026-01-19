import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { useAppSelector } from 'src/hooks/hooks';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const GroupListPage = memo(() => {
  const groups = useAppSelector(s => s.groups) as GroupContactsDto[];

  return (
    <Row xxl={4}>
      {groups.map(group => (
        <Col key={group.id}>
          <GroupContactsCard groupId={group.id} withLink />
        </Col>
      ))}
    </Row>
  );
});
