import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';
import { useAppSelector } from 'src/store/hooks';
import { ContactDto } from 'src/types/dto/ContactDto';

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const contacts = useAppSelector(s => s.contacts) as ContactDto[];

  const contact = contacts.find(c => c.id === contactId);

  return (
    <Row xxl={3}>
      <Col className="mx-auto">
        {contact ? (
          <ContactCard contact={contact} withLink={false} />
        ) : (
          <Empty />
        )}
      </Col>
    </Row>
  );
};
