import { memo, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContactsContext } from 'src/context/ContactsContext';

interface GroupContactsCardProps {
  groupId: string;
  withLink?: boolean;
  className?: string;
}

export const GroupContactsCard = memo<GroupContactsCardProps>(({
  groupId,
  withLink = true,
}) => {
  const { state } = useContext(ContactsContext);
  const group = state.groups.find(g => g.id === groupId);

  if (!group) {
    return null;
  }

  const {
    id,
    name,
    description,
    photo,
    contactIds
  } = group;

  return (
    <Card key={id}>
      <Card.Img 
        variant="top" 
        src={photo}
      />
      <Card.Body>
        <Card.Header>
          {withLink ? (
            <Link 
              to={`/groups/${id}`} 
            >
              {name}
            </Link>
          ) : (
            name
          )}
        </Card.Header>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Footer>
          Контакты: {contactIds.length}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
});