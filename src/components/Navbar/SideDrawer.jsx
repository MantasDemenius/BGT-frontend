import React from 'react';
import PropTypes from 'prop-types';
import {
  SwipeableDrawer, Hidden, List, ListItem, ListItemText, makeStyles, Tooltip, Toolbar,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PrivateComponent from '../../helper/PrivateComponent';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

const SideDrawer = ({
  user, open, handleToggle, links,
}) => {
  const history = useHistory();
  const classes = useStyles();

  const sideDrawerLink = ({ link }) => (
    <Tooltip
      open={false}
      title=""
      onClick={handleToggle}
    >
      <ListItem id={link.linkId} button>
        <ListItemText
          primary={link.text}
          onClick={() => history.push(link.path)}
        />
      </ListItem>
    </Tooltip>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <SwipeableDrawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Toolbar style={{ minHeight: '1em' }} />
          <Toolbar />
          <div>
            <List>
              {links.map((link) => (
                <PrivateComponent
                  key={link.text}
                  component={sideDrawerLink}
                  user={user}
                  allowedRoles={link.allowedRoles}
                  link={link}
                />
              ))}
            </List>
          </div>
        </SwipeableDrawer>
      </Hidden>
    </nav>
  );
};

SideDrawer.propTypes = {
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

export default SideDrawer;
