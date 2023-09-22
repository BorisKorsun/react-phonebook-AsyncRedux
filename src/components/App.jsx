import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePrevious } from 'hooks';
import { fetchAllContacts, addContact } from 'redux/contactsSlice/operations';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook/';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

export default function App() {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const prevContacts = usePrevious(contacts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  useEffect(() => {
    if(contacts > prevContacts) {
      toast.success('Contact was added succesfully')
    };

    if(contacts < prevContacts) {
      toast.success('Contact was deleted succesfully')
    }
  }, [contacts, prevContacts]);

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const onSubmitForm = async ({ name, phone }) => {
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      toast.error(`${name} is already exists`);
      return;
    }
    await dispatch(addContact({ name, phone }));
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ToastContainer />
      <Section title="Phonebook">
        <Phonebook onSubmit={onSubmitForm} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onFilterChange={onFilterChange} />
        <Contacts contacts={filterContacts()} />
      </Section>
    </>
  );
}
