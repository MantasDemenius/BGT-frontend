import React from 'react';
import PropTypes from 'prop-types';
import { Link as routerLink } from 'react-router-dom';
import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const NavbarLink = ({ linkId, path, linkText }) => {
  const classes = useStyles();
  return (
    <>
      <Link
        id={linkId}
        variant="button"
        color="inherit"
        component={routerLink}
        to={path}
        className={classes.link}
      >
        {linkText}
      </Link>
    </>
  );
};

NavbarLink.propTypes = {
  linkId: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default NavbarLink;
