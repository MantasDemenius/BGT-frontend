/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link as routerLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, CssBaseline, Toolbar, Typography, Button, makeStyles, Link,
} from '@material-ui/core';
import { removeUser } from '../helper/UserService';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const logout = () => {
  removeUser();
  window.location.href = '/BGT-frontend';
};

const NavBar = ({ user }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link component={routerLink} to="/" color="inherit" variant="inherit" underline="none">
              BGT
            </Link>
          </Typography>
          <nav>
            {user.name}
            {' '}
            {user.roles}
            {' '}
            {String(user.loggedIn)}
            {/* <Link variant="button" color="textPrimary" component={routerLink} to="/"
            className={classes.link}>
              Home
            </Link> */}
            {(user.roles.includes('CREATOR') || user.roles.includes('ADMIN')) && (
            <Link
              variant="button"
              color="inherit"
              component={routerLink}
              to="/games/add"
              className={classes.link}
            >
              Add game
            </Link>
            )}
            {/* <Link variant="button" color="textPrimary" className={classes.link}>
              {user.name}
            </Link> */}
            {/* {!user.loggedIn && (
          <Link variant="button" color="textPrimary" href="/">
            Login
          </Link>
          )} */}
          </nav>
          {!user.loggedIn && (
            <Button component={routerLink} to="/login" color="inherit" variant="outlined" className={classes.link}>
              Login
            </Button>
          )}
          {user.loggedIn && (
            <Button onClick={logout} color="inherit" variant="outlined" className={classes.link}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

NavBar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    roles: PropTypes.string,
    loggedIn: PropTypes.bool,
  }).isRequired,
};

export default NavBar;
