import React from 'react';
import { removeUser } from '../helper/UserService';

const logout = () => {
  removeUser();
  window.location.href = '/BGT-frontend';
};

const LogoutButton = () => (
  <button type="button" onClick={logout}>Logout</button>
);
export default LogoutButton;
