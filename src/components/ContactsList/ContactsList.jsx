import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getVisibleContacts, selectIsLoading } from 'redux/contacts/selectors';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Loader } from '../Loaders/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(getVisibleContacts);

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <Loader isOpen={isLoading} />
      <List>
        {contacts.map(({ id, firstName, lastName, phoneNumber }) => {
          return (
            <ListItem key={id}>
              <ListItemText
                primary={`${firstName} ${lastName} - ${phoneNumber}`}
              />
              <Button
                variant="outlined"
                onClick={() => removeContact(id)}
                startIcon={<DeleteIcon />}
              >
                Удалить
              </Button>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
// до изменений
