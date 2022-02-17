import React from 'react';
import { Switch, Route } from 'react-router';

import MainPage from './containers/MainPage';
import LoadingPage from './containers/LoadingPage';

export default (
  <Switch>
    <Route exact path="/" component={LoadingPage} />
  </Switch>
);
