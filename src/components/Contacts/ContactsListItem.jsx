import { DeleteBtn, Item } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { toast } from 'react-toastify';

export default function ContactsListItem({ id, name, phone }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  const handleDeleteContact = async id => {
    dispatch(deleteContact(id))
  };
  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <DeleteBtn
        onClick={() => handleDeleteContact(id)}
        disabled={isLoading}
        type="button"
      >
        {isLoading ? 'Deleting' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
}
