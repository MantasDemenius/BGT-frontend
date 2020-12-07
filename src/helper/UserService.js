import jwtDecode from 'jwt-decode';

const user = {
  name: '',
  roles: '',
  loggedIn: false,
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const removeUser = () => {
  removeToken();
  user.name = '';
  user.roles = '';
  user.loggedIn = false;
};

export const setUser = async () => {
  if (localStorage.getItem('token')) {
    const { sub, scopes } = jwtDecode(localStorage.getItem('token'));
    user.name = sub;
    user.roles = scopes;
    user.loggedIn = true;
  }
};

export const getUser = () => user;
// rafce
