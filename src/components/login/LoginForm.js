import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log('Logging in', values);
        setSubmitting(false);
      }, 500);
    }}
  >
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && 'error'}
            />
          </label>

          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
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

        </form>
      );
    }}
  </Formik>
);

export default LoginForm;
