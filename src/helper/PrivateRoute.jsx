/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { checkAllowedRoles } from './HelperFunctions';

const PrivateRoute = ({
  component: Component, user, allowedRoles, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!user.loggedIn) {
        return <Redirect to={{ pathname: '/' }} />;
      }
      if (!checkAllowedRoles(user.roles, allowedRoles)) {
        return <Redirect to={{ pathname: '/' }} />;
      }
      return <Component {...props} />;
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    roles: PropTypes.string,
    loggedIn: PropTypes.bool,
  }).isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PrivateRoute;
