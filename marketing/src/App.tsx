import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default ({ history }: any) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path='/root/pricing' component={Pricing} />
          <Route exact path='/root' component={Landing} />
          <Route path='/' component={Landing} />
        </Switch>
      </Router>
    </div>
  );
};
