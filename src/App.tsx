import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import GameRouter from './pages/GameRouter';

import './styles/bootstrap.scss';
import './styles/index.scss';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/:roomID" exact component={GameRouter} />
    </Switch>
  );
}

export default App;
