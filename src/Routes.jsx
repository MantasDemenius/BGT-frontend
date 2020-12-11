import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import LoginForm from './pages/LoginPage/LoginForm';
import RegisterForm from './pages/RegisterPage/RegisterForm';
import { getUser } from './helper/UserService';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './helper/PrivateRoute';
import UserList from './pages/Admin/UsersPage/UserList';
import Role from './helper/Role';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer';
import PageRoutes from './components/Navbar/PageRoutes';

const Routes = () => {
  const [user, setUser] = useState({
    name: '',
    roles: '',
    loggedIn: false,
  });

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <BrowserRouter basename="/BGT-frontend">
      <Navbar user={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        {PageRoutes.map((route) => (
          <PrivateRoute
            key={route.text}
            path={route.path}
            component={route.component}
            user={user}
            allowedRoles={route.allowedRoles}
          />
        ))}
        <PrivateRoute exact path="/users" component={UserList} user={user} allowedRoles={[Role.Admin]} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default Routes;
