import { memo, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactsContext } from 'src/context/ContactsContext';

export const FavoritListPage = memo(() => {
  const { state } = useContext(ContactsContext);
  const { contacts, favorites } = state;
  
  const favoriteContacts = contacts.filter(contact => 
    favorites.includes(contact.id)
  );

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard 
            contact={contact}
            withLink 
          />
        </Col>
      ))}
    </Row>
  );
});
