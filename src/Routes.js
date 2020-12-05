import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import LoginForm from './pages/LoginPage/LoginForm';
import RegisterForm from './pages/RegisterPage/RegisterForm';
import { getUser } from './helper/UserService';
import LogoutButton from './components/LogoutButton';
import PrivateRoute from './helper/PrivateRoute';
import UserList from './pages/Admin/UsersPage/UserList';
import Role from './helper/Role';

const Routes = () => {
  const [user] = useState(getUser());

  return (
    <BrowserRouter basename="/BGT-frontend">
      <div>{user.name}</div>
      <div>{user.roles}</div>
      <div>{String(user.loggedIn)}</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      {user.loggedIn
      && (
      <div>
        <Link to="/users">users</Link>
      </div>
      )}
      {!user.loggedIn
      && (
      <div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
      )}
      <LogoutButton />
      <Switch>
        <Route exact path="/" render={() => <div>Hello my main page</div>} />
        <Route path="/login" render={LoginForm} />
        <Route path="/register" render={RegisterForm} />
        <PrivateRoute exact path="/users" component={UserList} user={user} roles={[Role.Admin]} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
