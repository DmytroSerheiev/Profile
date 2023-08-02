import { Form, Formik, ErrorMessage } from 'formik';
import { InputText } from './ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const initialValues = {
  firstName: 'John',
  //======================================
  phone: '+380674567890',
};
const rePhoneNumber =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/;
const reLastName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = Yup.object().shape({
  firstName: Yup.string()
    .matches(reLastName, 'Last Name is not valid')
    .required('Required'),
  //=======================================================

  //=======================================================
  phone: Yup.string()
    .matches(rePhoneNumber, 'Phone number is not valid')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, { resetForm }) => {
    const isContact = contacts.filter(
      contact => contact.name.includes(values.firstName) //================================
    );
    if (isContact.length) {
      alert(`${values.firstName} is alredy in contacts`);
      return;
    }
    console.log(values);
    dispatch(addContact(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <InputText name="firstName" type="text" />
        <ErrorMessage name="firstName" component="div" />
        <br />
        {/* //=========================// */}

        {/* //=========================// */}
        <label htmlFor="phone">Phone Number</label>
        <InputText name="phone" type="tel" />
        <ErrorMessage name="phone" component="div" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
