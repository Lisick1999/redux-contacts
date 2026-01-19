import { memo } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { useAppSelector } from 'src/hooks/hooks';
import { ContactDto } from 'src/types/dto/ContactDto';

export const FavoritListPage = memo(() => {
  const contacts = useAppSelector(s => s.contacts) as ContactDto[];
  const favorites = useAppSelector(s => s.favorites) as string[];

  const favoriteContacts = contacts.filter(c => favorites.includes(c.id));

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts.map(contact => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
