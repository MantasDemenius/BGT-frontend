/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Formik,
  Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import { setToken, setUser } from '../../helper/UserService';
import { postNoTokenRequest } from '../../helper/ApiRequests';

const StyledDiv = styled.div`
  margin-top: 64px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  margin: 8px;
  background-color: red;
`;

const StyledForm = styled(Form)`
  width: 100%;
  margin-top: 10px;
`;

const StyledSubmitButton = styled(Button)`
  margin: 24px 0 16px;
`;

const StyledErrorDiv = styled.div`
    color: red;`;

const LoginForm = () => {
  const history = useHistory();
  return (
    <Formik
      initialValues={{ username: '', password: '', errors: '' }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string()
          .required('No password provided.'),
      // .min(8, 'Password is too short - should be 8 chars minimum.')
      // .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
      })}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        const response = await postNoTokenRequest('/authenticate', values);
        if (response.status === 'OK') {
          setToken(response.data.token);
          setUser();
          setSubmitting(false);
          history.push('/');
          history.go(0);
        } else {
          setFieldError('errors', 'Username or password is incorrect!');
        // setFieldError('username', 'error');
        }
      }}
    >
      {(props) => {
        const {
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <StyledDiv>
              <StyledAvatar>
                <LockOutlinedIcon />
              </StyledAvatar>
              <Typography component="h1" variant="h5" />
              <StyledForm onSubmit={handleSubmit}>
                <TextField
                  id="errors"
                  name="errors"
                  disabled
                  type="hidden"
                />
                <ErrorMessage component={StyledErrorDiv} name="errors" />
                <TextField
                  type="text"
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  placeholder="Enter your username"
                  autoFocus
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage component={StyledErrorDiv} name="username" />
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage component={StyledErrorDiv} name="password" />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <StyledSubmitButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Sign In
                </StyledSubmitButton>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      Don&apos;t have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </StyledForm>
            </StyledDiv>
          </Container>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
