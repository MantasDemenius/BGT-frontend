import jwtDecode from 'jwt-decode';
import { getRequest } from './ApiRequests';

const user = {
  id: 0,
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
  user.id = 0;
  user.name = '';
  user.roles = '';
  user.loggedIn = false;
};

export const setUser = () => {
  if (localStorage.getItem('token')) {
    const { sub, scopes } = jwtDecode(localStorage.getItem('token'));
    user.id = getRequest(`/users/${sub}/id`);
    user.name = sub;
    user.roles = scopes;
    user.loggedIn = true;
  }
};

export const getUser = () => user;
// rafce
