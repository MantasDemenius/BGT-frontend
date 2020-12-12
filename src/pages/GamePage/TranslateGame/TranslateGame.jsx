/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Container, makeStyles, Typography, CssBaseline,
  FormControl, Select, MenuItem,
  Button,
  InputLabel,
  Paper,
  Grid,
  TextField,
  Card,
  CardContent,
} from '@material-ui/core';
import { Form, Formik, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import validationSchema from '../../../helper/const/GameAndComponentValidationSchema';
import { getNoTokenRequest, postRequest, getRequest } from '../../../helper/ApiRequests';
import { getUser } from '../../../helper/UserService';

const StyledErrorDiv = styled.div`
    color: red;`;

const useStyles = makeStyles((theme) => ({
  titlePaper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    height: '40vh',
    padding: theme.spacing(0, 6),
    color: theme.palette.text.secondary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    display: 'inline-block',
    minWidth: '49%',
    margin: theme.spacing(3, 0, 2),
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      margin: theme.spacing(2, 0, 0),
    },
  },
  buttonGroup: {
    textAlign: 'center',
  },
  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: 120,
  },
  textField: {
  },
}));

const TranslateGame = ({ location }) => {
  const history = useHistory();
  const classes = useStyles();
  const [languages, setLanguages] = useState([]);
  const { game } = location.state;

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
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        const user = getUser();
        const responseId = await getRequest(`/users/${user.name}/id`);
        const request = {
          title: values.title,
          description: values.description,
          languageId: values.language,
          originalGameId: location.state.game.id,
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
          <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.titlePaper}>
              <Typography component="h1" variant="h5">
                Translate
                {' '}
                {game.title}
              </Typography>
            </div>
            <Form id="translate-game" onSubmit={handleSubmit}>
              <div className={classes.papers}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={8}>
                    <Paper
                      elevation={4}
                      className={classes.paper}
                    >
                      <TextField
                        type="text"
                        id="title"
                        name="title"
                        label="Title"
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
                        fullWidth
                        placeholder="Enter game description"
                        autoFocus
                        multiline
                        rows={4}
                        margin="normal"
                        value={values.description}
                        onChange={handleChange}
                        inputProps={{ className: classes.textField }}
                        className={classes.textField}
                      />
                      <ErrorMessage component={StyledErrorDiv} name="title" />
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
                            <MenuItem key={language.id} value={language.id}>
                              {language.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <ErrorMessage component={StyledErrorDiv} name="language" />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Paper
                      className={classes.paper}
                      elevation={4}
                    >
                      <Card fullWidth elevation={0}>
                        <CardContent>
                          <Typography variant="h5" component="h2">
                            {game.title}
                          </Typography>

                          <Typography variant="body2" component="p">
                            Description:
                            {' '}
                            {game.description}
                          </Typography>
                          <Typography variant="body2" component="p">
                            Author:
                            {' '}
                            {game.author}
                          </Typography>
                          <Typography variant="body2" component="p">
                            Language:
                            {' '}
                            {game.language}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ float: 'left' }}
                  disabled={isSubmitting}
                  className={classes.submit}
                >
                  Create
                </Button>
                <Button
                  type="reset"
                  variant="contained"
                  color="secondary"
                  style={{ float: 'right' }}
                  onClick={() => history.push('/')}
                  className={classes.submit}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};
export default TranslateGame;
