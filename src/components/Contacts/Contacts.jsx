import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';

export default function Contacts({ contacts }) {
  return (
    <>
      <ul>
        {contacts.map(({ name, id, phone }) => {
          return (
            <ContactsListItem key={id} id={id} name={name} phone={phone} />
          );
        })}
      </ul>
    </>
  );
}

Contacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
