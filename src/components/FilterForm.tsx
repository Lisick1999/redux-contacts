import { Formik } from 'formik';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { memo } from 'react';
import { FormikConfig } from 'formik/dist/types';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export interface FilterFormValues {
  name: string;
  groupId: string;
}

interface FilterFormProps extends FormikConfig<FilterFormValues> {
  onSubmit: (values: FilterFormValues) => void;
  groupContactsList?: GroupContactsDto[];
}

export const FilterForm = memo<FilterFormProps>(({
  onSubmit,
  initialValues = {
    name: '',
    groupId: ''
  },
  groupContactsList = []
}) => {


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        
        <Form onSubmit={handleSubmit}>
          <Row xxl={4} className="g-4">
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Имя контакта"
                  aria-label="Поиск по имени"
                />
                {errors.name && touched.name && (
                  <Form.Text>
                    {errors.name}
                  </Form.Text>
                )}
              </InputGroup>
            </Col>
            <Col>
              <Form.Select
                id="groupId"
                name="groupId"
                value={values.groupId}
                aria-label="Поиск по группе"
                onChange={handleChange}
              >
                <option value="">Все группы</option>
                {groupContactsList.map((group) => (
                  <option value={group.id} key={group.id}>
                    {group.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Применить
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
});
