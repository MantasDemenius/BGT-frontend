/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, CssBaseline, Toolbar, Typography, Button, makeStyles,
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
      {/* <AppBar position="static" color="default" elevation={0}> */}
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar>
          {/* <Toolbar className={classes.toolbar}> */}
          {/* <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}> */}
          <Typography variant="h6" color="inherit" noWrap>
            <Link to="/" color="inherit" variant="inherit" underline="none">
              BGT
            </Link>
          </Typography>
          <nav>
            {/* <Link variant="button" color="textPrimary" href="#" className={classes.link}> */}
            <Link variant="button" color="textPrimary" to="/">
              Home
            </Link>
            {/* {!user.loggedIn && (
          <Link variant="button" color="textPrimary" href="/">
            Login
          </Link>
          )} */}
          </nav>
          {/* <Button href="#" color="primary" variant="outlined" className={classes.link}> */}
          {!user.loggedIn && (
            <Button href="/BGT-frontend/login" color="primary" variant="outlined">
              Login
            </Button>
          )}
          {user.loggedIn && (
            <Button color="primary" variant="outlined" onClick={logout}>
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
