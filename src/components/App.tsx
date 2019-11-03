import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'assets/scss/site.scss';

import SiteLayout from 'layouts/Site';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={SiteLayout} />
    </Switch>
  </BrowserRouter>
);

export default hot(App);
