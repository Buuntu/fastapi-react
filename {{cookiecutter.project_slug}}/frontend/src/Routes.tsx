import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Login } from './views';
import { Admin } from './admin';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
