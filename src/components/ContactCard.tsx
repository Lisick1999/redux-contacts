import { memo} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContactDto } from 'src/types/dto/ContactDto';

interface ContactCardProps {
  contact: ContactDto;
  withLink?: boolean;
  className?: string;
}

export const ContactCard = memo<ContactCardProps>(({
  contact,
  withLink = true,
}) => {
  const {
    photo,
    id,
    name,
    phone,
    birthday,
    address
  } = contact;

  return (
    <Card key={id}>
      <Card.Img 
        variant="top" 
        src={photo} 
        alt={`Photo of ${name}`}
        className="card-img"
      />
      <Card.Body>
        <Card.Title>
          {withLink ? (
            <Link 
              to={`/contact/${id}`}>
              {name}
            </Link>
          ) : (
            name
          )}
        </Card.Title>
        <ListGroup>
          <ListGroup.Item>
              <Link 
                to={`tel:${phone}`} 
                target="_blank" 
              >
                {phone}
              </Link>
            </ListGroup.Item>
          
            <ListGroup.Item>{birthday}</ListGroup.Item>
            <ListGroup.Item>{address}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
});
