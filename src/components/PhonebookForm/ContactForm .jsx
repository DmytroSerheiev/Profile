import { Form, Formik, ErrorMessage } from 'formik';
import { SelectInput } from './ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import { Button, TextField } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  organizer: '',
  phoneNumber: '',
  address: '',
  state: '',
  zipCode: '',
  country: '',
  language: '',
  timezone: '',
  currency: '',
};

const schema = Yup.object().shape({
  firstName: Yup.string().required('Обязательное поле'),
  lastName: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  organizer: Yup.string().required('Обязательное поле'),
  phoneNumber: Yup.string().required('Обязательное поле'),
  address: Yup.string().required('Обязательное поле'),
  state: Yup.string().required('Обязательное поле'),
  zipCode: Yup.string().required('Обязательное поле'),
  country: Yup.string().required('Обязательное поле'),
  language: Yup.string().required('Обязательное поле'),
  timezone: Yup.string().required('Обязательное поле'),
  currency: Yup.string().required('Обязательное поле'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isContact = contacts.some(
      contact =>
        contact.firstName === values.firstName &&
        contact.lastName === values.lastName
    );

    if (isContact) {
      alert(`${values.firstName} ${values.lastName} уже есть в контактах`);
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
      {formik => (
        <Form onSubmit={formik.handleSubmit}>
          <div className="input-row">
            <div className="input-container">
              <label htmlFor="firstName">First Name</label>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={
                  formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : 'Enter your first name'
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <AccountCircleOutlinedIcon
                      style={{
                        color:
                          formik.touched.firstName && formik.errors.firstName
                            ? 'red'
                            : 'gray',
                      }}
                    />
                  ),
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="lastName">Last Name</label>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={
                  formik.touched.lastName && formik.errors.lastName
                    ? formik.errors.lastName
                    : 'Enter your last name'
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <AccountCircleOutlinedIcon
                      style={{
                        color:
                          formik.touched.lastName && formik.errors.lastName
                            ? 'red'
                            : 'gray',
                      }}
                    />
                  ),
                }}
              />
            </div>
          </div>

          {/* Add the remaining input and select fields with similar structure */}
          <div className="input-row">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <TextField
                fullWidth
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : 'Enter your email address'
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <AccountCircleOutlinedIcon
                      style={{
                        color:
                          formik.touched.email && formik.errors.email
                            ? 'red'
                            : 'gray',
                      }}
                    />
                  ),
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="organizer">Organizer</label>
              <TextField
                fullWidth
                id="organizer"
                name="organizer"
                value={formik.values.organizer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.organizer && Boolean(formik.errors.organizer)
                }
                helperText={
                  formik.touched.organizer && formik.errors.organizer
                    ? formik.errors.organizer
                    : 'Enter the organizer name'
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <AccountCircleOutlinedIcon
                      style={{
                        color:
                          formik.touched.organizer && formik.errors.organizer
                            ? 'red'
                            : 'gray',
                      }}
                    />
                  ),
                }}
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-container">
              <label htmlFor="phoneNumber">Phone Number</label>
              <TextField
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? formik.errors.phoneNumber
                    : 'Enter your phone number'
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <AccountCircleOutlinedIcon
                      style={{
                        color:
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                            ? 'red'
                            : 'gray',
                      }}
                    />
                  ),
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="address">Address</label>
              <TextField
                fullWidth
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={
                  formik.touched.address && formik.errors.address
                    ? formik.errors.address
                    : 'Enter your address'
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <AccountCircleOutlinedIcon
                      style={{
                        color:
                          formik.touched.address && formik.errors.address
                            ? 'red'
                            : 'gray',
                      }}
                    />
                  ),
                }}
              />
            </div>
          </div>

          {/* Add the remaining input and select fields with similar structure */}
          <div className="input-row">
            {/* State */}
            <div className="input-container">
              <label htmlFor="state">State</label>
              <TextField
                fullWidth
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={
                  formik.touched.state && formik.errors.state
                    ? formik.errors.state
                    : 'Enter your state'
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <AccountCircleOutlinedIcon
                      style={{
                        color:
                          formik.touched.state && formik.errors.state
                            ? 'red'
                            : 'gray',
                      }}
                    />
                  ),
                }}
              />
            </div>
            {/* Zip Code */}
            <div className="input-container">
              <label htmlFor="zipCode">Zip Code</label>
              <TextField
                fullWidth
                id="zipCode"
                name="zipCode"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                helperText={
                  formik.touched.zipCode && formik.errors.zipCode
                    ? formik.errors.zipCode
                    : 'Enter your zip code'
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <AccountCircleOutlinedIcon
                      style={{
                        color:
                          formik.touched.zipCode && formik.errors.zipCode
                            ? 'red'
                            : 'gray',
                      }}
                    />
                  ),
                }}
              />
            </div>
          </div>

          <div className="input-row">
            {/* Country */}
            <div className="input-container">
              <label htmlFor="country">Country</label>
              <TextField
                fullWidth
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={
                  formik.touched.country && formik.errors.country
                    ? formik.errors.country
                    : 'Enter your country'
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <AccountCircleOutlinedIcon
                      style={{
                        color:
                          formik.touched.country && formik.errors.country
                            ? 'red'
                            : 'gray',
                      }}
                    />
                  ),
                }}
              />
            </div>
            {/* Language */}
            <div className="input-container">
              <label htmlFor="language">Language</label>
              <SelectInput name="language" id="language">
                <option value="">Select language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                {/* Add more language options if needed */}
              </SelectInput>
              <ErrorMessage
                name="language"
                component="div"
                className="error-message"
              />
            </div>
          </div>

          {/* Add the remaining input and select fields with similar structure */}
          <div className="input-row">
            {/* Timezone */}
            <div className="input-container">
              <label htmlFor="timezone">Timezone</label>
              <SelectInput name="timezone" id="timezone">
                <option value="">Select timezone</option>
                <option value="utc">UTC</option>
                <option value="est">EST</option>
                {/* Add more timezone options if needed */}
              </SelectInput>
              <ErrorMessage
                name="timezone"
                component="div"
                className="error-message"
              />
            </div>
            {/* Currency */}
            <div className="input-container">
              <label htmlFor="currency">Currency</label>
              <SelectInput name="currency" id="currency">
                <option value="">Select currency</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                {/* Add more currency options if needed */}
              </SelectInput>
              <ErrorMessage
                name="currency"
                component="div"
                className="error-message"
              />
            </div>
          </div>

          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
