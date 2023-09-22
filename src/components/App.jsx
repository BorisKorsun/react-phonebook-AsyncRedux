import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/contactsSlice/operations';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook/';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

export default function App() {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchAllContacts())}, []);

  // const { data: contacts = [] } = useGetContactsQuery();
  // const [addContact] = useAddContactMutation();

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  // const onSubmitForm = async ({ name, phone }) => {
  //   const isContact = contacts.find(contact => contact.name === name);
  //   if (isContact) {
  //     toast.error(`${name} is already exists`);
  //     return;
  //   }
  //   const newContact = {
  //     name,
  //     phone,
  //   };
  //   try {
  //     await addContact(newContact);
  //     toast.success('New contact was added succesfully');
  //   } catch (e) {
  //     toast.error(e.message);
  //   }
  // };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ToastContainer />
      <Section title="Phonebook">
        {/* <Phonebook onSubmit={onSubmitForm} /> */}
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onFilterChange={onFilterChange} />
        <Contacts contacts={filterContacts()} />
      </Section>
    </>
  );
}
