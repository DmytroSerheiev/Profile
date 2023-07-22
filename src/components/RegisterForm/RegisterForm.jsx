// Imports
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, TextField } from '@mui/material';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import MailOutline from '@mui/icons-material/MailOutline';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const namePattern =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const SignUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      namePattern,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isAuthLoading } = useAuth();

  const handleSubmit = values => {
    dispatch(register(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: SignUpValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      {!isAuthLoading && (
        <form onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : 'For example, John Doe'
            }
            margin="normal"
            InputProps={{
              endAdornment: (
                <>
                  <AccountCircleOutlined
                    style={{
                      color:
                        formik.touched.name && formik.errors.name
                          ? 'red'
                          : 'gray',
                    }}
                  />
                </>
              ),
            }}
          />
          {/* Email Field */}
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : 'For example, john.doe@example.com'
            }
            margin="normal"
            InputProps={{
              endAdornment: (
                <>
                  <MailOutline
                    style={{
                      color:
                        formik.touched.email && formik.errors.email
                          ? 'red'
                          : 'gray',
                    }}
                  />
                </>
              ),
            }}
          />
          {/* Password Field */}
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : 'Minimum 8 characters'
            }
            margin="normal"
            InputProps={{
              endAdornment: (
                <>
                  <VisibilityOffOutlined
                    style={{
                      color:
                        formik.touched.password && formik.errors.password
                          ? 'red'
                          : 'gray',
                    }}
                  />
                </>
              ),
            }}
          />
          {/* Submit Button */}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      )}
    </>
  );
};
