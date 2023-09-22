import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const Phonebook = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const initialValue = {
    name: '',
    phone: '',
  };

  const onInputChange = e => {
    const value = e.target.value;
    const { name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        throw new Error(`There is no option name - ${name}`);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={() => {
          onSubmit({ name, phone });
          setName('');
          setPhone('');
        }}
      >
        <Form>
          <label>
            Name{' '}
            <Field
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              autoComplete="off"
              onChange={onInputChange}
              name="name"
              value={name}
            />
          </label>
          <ErrorMessage name="name" />
          <label>
            Number{' '}
            <Field
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              autoComplete="off"
              onChange={onInputChange}
              name="phone"
              value={phone}
            />
          </label>
          <ErrorMessage name="phone" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
