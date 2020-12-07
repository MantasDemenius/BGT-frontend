import React from 'react';
import PropTypes from 'prop-types';

const Snackbar = ({
  message, severity, open, onClose,
}) => (
  <>
    {console.log(String(open))}
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={6000}
      open={open}
      onClose={onClose}
      message={message}
      severity={severity}
    />
  </>
);

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Snackbar;
