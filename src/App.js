import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import { setUser } from './helper/UserService';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Routes />
  );
};

export default App;
