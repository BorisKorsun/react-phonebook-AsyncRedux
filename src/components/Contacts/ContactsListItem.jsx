import { DeleteBtn, Item } from './Contacts.styled';
import { useDeleteContactMutation } from 'redux/contacts';
import { toast } from 'react-toastify';

export default function ContactsListItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const handleDeleteContact = async id => {
    try {
      await deleteContact(id);
      toast.success('Contact was deleted succesfully');
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <DeleteBtn
        onClick={() => handleDeleteContact(id)}
        disabled={isDeleting}
        type="button"
      >
        {isDeleting ? 'Deleting' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
}
