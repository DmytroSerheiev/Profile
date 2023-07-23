// import { nanoid } from 'nanoid';
import { ContactForm } from 'components/PhonebookForm/ContactForm ';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Box } from 'components/common/Box';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { Helmet } from 'react-helmet';
import { Container, Section, Icons } from './Settings.styled';

export default function Settings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Icons></Icons>
      <Section>
        <Helmet>
          <title>My Settings</title>
        </Helmet>
        <Box display="flex" flexDirection="column" ml="20px">
          <h1>Settings</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Box>
      </Section>
    </Container>
  );
}
