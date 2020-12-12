/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { ErrorMessage } from 'formik';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { UppercaseFirstLetter } from '../helper/HelperFunctions';

const StyledErrorDiv = styled.div`
    color: red;`;

const useStyles = makeStyles(() => ({
  textField: {
    background: 'white',
    WebkitBoxShadow: '0 0 0 1000px white inset',
  },
}));

const FormTextFieldWithError = ({
  value, change, name, autoFocus, placeholder, ...rest
}) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        type="text"
        id={name}
        name={name}
        label={UppercaseFirstLetter(name)}
        variant="outlined"
        margin="normal"
        fullWidth
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={value}
        onChange={change}
        inputProps={{ className: classes.textField }}
        className={classes.textField}
        {...rest}
      />
      <ErrorMessage component={StyledErrorDiv} name={name} />
    </>
  );
};

FormTextFieldWithError.propTypes = {
  value: Proptypes.string.isRequired,
  change: Proptypes.func.isRequired,
  name: Proptypes.string.isRequired,
  autoFocus: Proptypes.bool.isRequired,
  placeholder: Proptypes.string.isRequired,
};

export default FormTextFieldWithError;
