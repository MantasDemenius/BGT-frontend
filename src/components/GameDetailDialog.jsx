import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { getUser } from '../helper/UserService';

const GameDetailDialog = ({ item, handleDeleteGame }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [user, setUser] = useState({
    name: '',
    roles: '',
    loggedIn: false,
  });

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{item.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Description:
            {' '}
            {item.description}
          </DialogContentText>
          <DialogContentText>
            Author:
            {' '}
            {item.author}
          </DialogContentText>
          <DialogContentText>
            Language:
            {' '}
            {item.language}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {(user.roles.includes('CREATOR') || user.roles.includes('ADMIN')) && (
          <Button onClick={() => { handleDeleteGame(item.id); handleClose(); }} color="secondary">
            Delete
          </Button>
          )}
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

GameDetailDialog.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  handleDeleteGame: PropTypes.func.isRequired,
};

export default GameDetailDialog;
