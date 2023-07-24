import { Contact } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getVisibleContacts, selectIsLoading } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Loader } from '../Loaders/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = useSelector(getVisibleContacts);
  return (
    <ul>
      <Loader isOpen={isLoading} />
      {visibleContacts.map(({ id, name, lastname, number }) => {
        return (
          <Contact key={id}>
            {name}
            {lastname} {number}
            <Button
              variant="outlined"
              onClick={() => removeContact(id)}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Contact>
        );
      })}
    </ul>
  );
};
