import { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { ContactsContext } from 'src/context/ContactsContext';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const ContactListPage = () => {
  const { state } = useContext(ContactsContext);
  const { contacts, groups } = state;
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleFilterSubmit = (values: FilterFormValues) => {
    let filtered = contacts;

    if (values.name) {
      filtered = filtered.filter(contact => 
        contact.name.toLowerCase().includes(values.name.toLowerCase())
      );
    }
    
    if (values.groupId) {
      const group = groups.find(g => g.id === values.groupId);
      if (group) {
        filtered = filtered.filter(contact => 
          group.contactIds.includes(contact.id)
        );
      } else {
        filtered = [];
      }
    }

    setFilteredContacts(filtered);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm 
          groupContactsList={groups as GroupContactsDto[]} 
          initialValues={{
            name: '',  
            groupId: '' 
          }} 
          onSubmit={handleFilterSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts.map(contact => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
