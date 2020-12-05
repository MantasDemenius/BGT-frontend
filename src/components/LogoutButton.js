import React, { useState } from 'react';
import { getUser, removeUser } from '../helper/UserService';

const logout = () => {
  removeUser();
  window.location.href = '/BGT-frontend';
};

const LogoutButton = () => {
  const [user] = useState(getUser());

  return (
    <div>
      {user.loggedIn
      && <button type="button" onClick={logout}>Logout</button>}
    </div>
  );
};
export default LogoutButton;
