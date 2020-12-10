import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideDrawer from './SideDrawer';
import TopNavbar from './TopNavbar';
import Role from '../../helper/Role';

const Navbar = ({ user }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navbarLinks = [
    {
      text: 'Add game',
      path: '/games/add',
      allowedRoles: [Role.Admin, Role.Creator],
      linkId: 'add-game-link',
    },
    {
      text: 'Add game1',
      path: '/games/add',
      allowedRoles: [Role.Admin, Role.Creator],
      linkId: 'add-game-link',
    },
    {
      text: 'Basic user link',
      path: '/',
      allowedRoles: [],
      linkId: 'add-game-link',
    },
  ];

  return (
    <>
      <TopNavbar
        user={user}
        handleToggle={handleDrawerToggle}
        links={navbarLinks}
      />
      <SideDrawer
        user={user}
        open={mobileOpen}
        handleToggle={handleDrawerToggle}
        links={navbarLinks}
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
