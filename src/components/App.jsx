import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts, addContact } from 'redux/contactsSlice/operations';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook/';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

export default function App() {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchAllContacts())}, [dispatch]);

  // const { data: contacts = [] } = useGetContactsQuery();
  // const [addContact] = useAddContactMutation();

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const onSubmitForm = async ({ name, phone }) => {
    console.log(name, phone)
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      toast.error(`${name} is already exists`);
      return;
    }
    dispatch(addContact({name, phone}))
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
