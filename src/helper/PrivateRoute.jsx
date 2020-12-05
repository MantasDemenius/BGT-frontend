/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component, user, roles, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!user.loggedIn) {
        return <Redirect to={{ pathname: '/' }} />;
      }
      if (!user.roles.split(',').some((r) => roles.indexOf(r) >= 0)) {
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
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PrivateRoute;
