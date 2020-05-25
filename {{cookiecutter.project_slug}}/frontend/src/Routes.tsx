import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Home, Login } from './views';
import { Admin } from './admin';

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
}));

export const Routes = () => {
  const classes = useStyles();

  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>

      <div className={classes.app}>
        <header className={classes.header}>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </header>
      </div>
    </Switch>
  );
};
