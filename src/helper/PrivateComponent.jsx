/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { checkAllowedRoles } from './HelperFunctions';

const PrivateComponent = ({
  component: Component, user, allowedRoles, text, ...rest
}) => (
  <>
    {checkAllowedRoles(user.roles, allowedRoles) && (
    <Component {...rest}>{text}</Component>
    )}
  </>
);

PrivateComponent.propTypes = {
  component: PropTypes.elementType.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    roles: PropTypes.string,
    loggedIn: PropTypes.bool,
  }).isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string,
};

PrivateComponent.defaultProps = {
  text: '',
};

export default PrivateComponent;
