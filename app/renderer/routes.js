import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './containers/HomePage';
import PatchEditPage from './containers/PatchEditPage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/patches" component={PatchEditPage} />
  </Switch>
);
