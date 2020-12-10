import React from 'react';
import { Link as routerLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar, CssBaseline, Toolbar, Typography, Button, makeStyles, Link, IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { removeUser } from '../../helper/UserService';
import NavbarLink from './NavbarLink';
import PrivateComponent from '../../helper/PrivateComponent';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    zIndex: 2000,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
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
  loginHeader: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(5),
    minHeight: '1em',
    backgroundColor: '#18202c',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  closeMenuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
  },
  menuLinks: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'inline-flex',
  },
}));

const logout = () => {
  removeUser();
  window.location.href = '/BGT-frontend';
};

const TopNavbar = ({
  user, open, handleToggle, links,
}) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar name="logInHeader" className={classes.loginHeader}>
          {user.name && (
          <>
            Logged in as
            {' '}
            {user.name}
          </>
          )}
        </Toolbar>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleToggle}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleToggle}
            className={clsx(classes.closeMenuButton, open && classes.show)}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link component={routerLink} to="/" color="inherit" variant="inherit" underline="none">
              BGT
            </Link>
          </Typography>
          <nav className={classes.menuLinks}>
            {links.map((link) => (
              <PrivateComponent
                key={link.text}
                component={NavbarLink}
                user={user}
                allowedRoles={link.allowedRoles}
                linkId={link.linkId}
                path={link.path}
                linkText={link.text}
              />
            ))}
          </nav>
          {!user.loggedIn && (
            <Button component={routerLink} to="/login" color="inherit" variant="outlined" name="login" className={classes.link}>
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

TopNavbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    roles: PropTypes.string,
    loggedIn: PropTypes.bool,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    path: PropTypes.string,
    allowedRoles: PropTypes.arrayOf(PropTypes.string),
    linkId: PropTypes.string,
  })).isRequired,
};

export default TopNavbar;
