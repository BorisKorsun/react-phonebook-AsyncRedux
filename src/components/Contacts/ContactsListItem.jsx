import { DeleteBtn, Item } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactsListItem({ id, name, phone }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <DeleteBtn
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
        type="button"
      >
        {isLoading ? 'Deleting' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
}
