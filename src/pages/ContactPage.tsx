import { FC, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactsContext } from 'src/context/ContactsContext';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const { state } = useContext(ContactsContext);
  const { contacts } = state;

  const contact = contacts.find((c) => c.id === contactId);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? (
          <ContactCard 
            contact={contact}
            withLink={false}
          />
        ) : (
          <Empty />
        )}
      </Col>
    </Row>
  );
};
