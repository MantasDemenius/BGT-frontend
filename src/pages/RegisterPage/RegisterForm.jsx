import React from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
    validationSchema={Yup.object().shape({
      firstName: Yup.string()
        .required('First Name is required'),
      lastName: Yup.string()
        .required('Last Name is required'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    })}
  >
    {(props) => {
      const {
        touched,
        errors,
        isSubmitting,
        handleSubmit,
      } = props;
      return (
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">
              First Name
              {' '}
              <Field
                name="firstName"
                type="text"
                placeholder="Enter your email"
                className={`form-control${errors.firstName && touched.firstName ? ' is-invalid' : ''}`}
              />
              <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
            </label>

          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name
              {' '}
              <Field name="lastName" type="text" className={`form-control${errors.lastName && touched.lastName ? ' is-invalid' : ''}`} />
              <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
            </label>

          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              {' '}
              <Field name="email" type="text" className={`form-control${errors.email && touched.email ? ' is-invalid' : ''}`} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </label>

          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              {' '}
              <Field name="password" type="password" className={`form-control${errors.password && touched.password ? ' is-invalid' : ''}`} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </label>

          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
              {' '}
              <Field name="confirmPassword" type="password" className={`form-control${errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : ''}`} />
              <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
            </label>

          </div>
          <div className="form-group">
            <button type="submit" disabled={isSubmitting} className="btn btn-primary mr-2">Register</button>
          </div>
        </Form>
      );
    }}
  </Formik>
);
export default RegisterForm;
