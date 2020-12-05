import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { setToken, setUser } from '../../helper/UserService';
import { postNoTokenRequest } from '../../helper/ApiRequests';

const LoginForm = () => (
  <Formik
    initialValues={{ username: '', password: '' }}
    validationSchema={Yup.object().shape({
      username: Yup.string().required('Required'),
      password: Yup.string()
        .required('No password provided.'),
      // .min(8, 'Password is too short - should be 8 chars minimum.')
      // .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
    })}
    onSubmit={async (values, { setSubmitting }) => {
      const response = await postNoTokenRequest('/authenticate', values);
      if (response) {
        setToken(response.data.token);
        setUser();
        console.log('token set');
        setSubmitting(false);
        window.location.href = '/';
      }
    }}
  >
    {/* https://www.youtube.com/watch?v=25GS0MLT8JU&feature=emb_logo&ab_channel=BenAwad */}
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <Form onSubmit={handleSubmit}>
          <label htmlFor="username">
            username
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.username && touched.username && 'error'}
            />
          </label>

          {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
          )}
          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && 'error'}
            />

          </label>

          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>

        </Form>
      );
    }}
  </Formik>
);

export default LoginForm;
