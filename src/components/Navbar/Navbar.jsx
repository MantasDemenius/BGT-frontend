import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideDrawer from './SideDrawer';
import TopNavbar from './TopNavbar';
import PageRoutes from './PageRoutes';

const Navbar = ({ user }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <TopNavbar
        user={user}
        open={mobileOpen}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
        links={PageRoutes}
      />
      <SideDrawer
        user={user}
        open={mobileOpen}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
        links={PageRoutes}
      />
    </>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    roles: PropTypes.string,
    loggedIn: PropTypes.bool,
  }).isRequired,
};

export default Navbar;
