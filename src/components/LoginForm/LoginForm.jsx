// Imports
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useAuth } from 'hooks';

const initialValues = {
  email: '',
  password: '',
};

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const handleSubmit = values => {
    dispatch(login(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: SignInValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Box>
      {!isRefreshing && (
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      )}
    </Box>
  );
};
