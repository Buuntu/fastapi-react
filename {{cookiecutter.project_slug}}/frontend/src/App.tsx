import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import { Admin } from './admin';

import './App.css';

const App: FC = () => (
  <Switch>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;
