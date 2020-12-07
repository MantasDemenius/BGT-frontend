import React from 'react';
import {
  Container, Typography, makeStyles, Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 'auto',
    padding: theme.spacing(6, 0),
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="/">
      Board game translator
    </Link>
    {' '}
    {new Date().getFullYear()}
    .
  </Typography>
);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Board game translator
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Page that fulfils all your needs
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
