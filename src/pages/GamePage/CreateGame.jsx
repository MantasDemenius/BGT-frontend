import React, { useState, useEffect } from 'react';
import {
  Container, makeStyles, Typography, CssBaseline, TextField,
  FormControl, Select, MenuItem,
  Button,
  InputLabel,
} from '@material-ui/core';
import { Form, Formik, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import styled from 'styled-components';
import { getNoTokenRequest, postRequest, getRequest } from '../../helper/ApiRequests';
import { getUser } from '../../helper/UserService';

const StyledErrorDiv = styled.div`
    color: red;`;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: 120,
  },
  textField: {
    background: 'white',
    WebkitBoxShadow: '0 0 0 1000px white inset',
  },
}));

const CreateGame = () => {
  const history = useHistory();
  const classes = useStyles();
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchLanguages() {
      const response = await getNoTokenRequest('/languages');
      setLanguages(response.data);
    }
    fetchLanguages();
  }, []);

  return (
    <Formik
      initialValues={{ title: '', description: '', language: '' }}
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .required('Title is required')
          .min(3, 'Title is too short - should be 3 characters minimum')
          .max(100, 'Title is too long - should be 100 characters maximum'),
        description: Yup.string()
          .required('Description is required')
          .min(3, 'Description is too short - should be 3 characters minimum')
          .max(2000, 'Description is too long - should be 2000 characters maximum'),
        language: Yup.string().required('Language is required'),
      })}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        const user = getUser();
        const responseId = await getRequest(`/users/${user.name}/id`);
        const request = {
          title: values.title,
          description: values.description,
          languageId: values.language,
          originalGameId: 0,
          author: user.name,
          userId: responseId.data.id,
        };

        const response = await postRequest('/games', request);
        if (response.status === 'OK') {
          setSubmitting(false);
          history.push('/');
        } else {
          setFieldError('title', 'Server error');
        }
      }}
    >
      {(props) => {
        const {
          values,
          isSubmitting,
          handleChange,
          handleSubmit,
        } = props;
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Create a new board game
              </Typography>
            </div>
            <Form id="create-game" className={classes.form} onSubmit={handleSubmit}>
              <TextField
                type="text"
                id="title"
                name="title"
                label="Title"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="Enter game title"
                autoFocus
                value={values.title}
                onChange={handleChange}
                inputProps={{ className: classes.textField }}
                className={classes.textField}
              />
              <ErrorMessage component={StyledErrorDiv} name="title" />
              <TextField
                type="text"
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="Enter game description"
                className={classes.textField}
                inputProps={{ className: classes.textField }}
                value={values.description}
                onChange={handleChange}
              />
              <ErrorMessage component={StyledErrorDiv} name="description" />
              {/* https://material-ui.com/components/autocomplete */}
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="select-language-label">Language</InputLabel>
                <Select
                  id="language"
                  name="language"
                  label="Language"
                  labelId="select-language-label"
                  className={classes.textField}
                  inputProps={{ className: classes.textField }}
                  value={values.language}
                  onChange={handleChange}
                >
                  {languages.map((language) => (
                    <MenuItem key={language.id} value={language.id}>{language.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <ErrorMessage component={StyledErrorDiv} name="language" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                className={classes.submit}
              >
                Create
              </Button>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};

export default CreateGame;
