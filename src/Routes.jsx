import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import LoginForm from './pages/LoginPage/LoginForm';
import RegisterForm from './pages/RegisterPage/RegisterForm';
import { getUser } from './helper/UserService';
import NavBar from './components/NavBar';
import PrivateRoute from './helper/PrivateRoute';
import UserList from './pages/Admin/UsersPage/UserList';
import Role from './helper/Role';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer';

const Routes = () => {
  const [user] = useState(getUser());

  return (
    <BrowserRouter basename="/BGT-frontend">
      <NavBar user={user} />
      <Switch>
        <Route exact path="/" render={HomePage} />
        <Route path="/login" render={LoginForm} />
        <Route path="/register" render={RegisterForm} />
        <PrivateRoute exact path="/users" component={UserList} user={user} roles={[Role.Admin]} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default Routes;
