import React, { FC } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';

import './App.css';

const App:FC = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;
