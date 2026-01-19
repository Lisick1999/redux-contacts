import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useAppSelector } from 'src/hooks/hooks';

export const ContactListPage = () => {
  const contacts = useAppSelector(s => s.contacts) as ContactDto[];
  const groups   = useAppSelector(s => s.groups) as GroupContactsDto[];

  const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>(contacts);

  const handleFilterSubmit = (values: FilterFormValues) => {
    let filtered: ContactDto[] = contacts;

    if (values.name) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(values.name.toLowerCase())
      );
    }

    if (values.groupId) {
      const group = groups.find(g => g.id === values.groupId);
      filtered = group
        ? filtered.filter(c => group.contactIds.includes(c.id))
        : [];
    }

    setFilteredContacts(filtered);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groups}
          initialValues={{ name: '', groupId: '' }}
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
