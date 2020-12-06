import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Routes from './Routes';
import { setUser } from './helper/UserService';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#eaeff1',
  },
}));

const App = () => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setUser();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className={classes.root}>
      <Routes />
    </div>
  );
};

export default App;
