import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default ({ onSignIn, onSignUp, onVerify, history }: any) => {
  console.log('in auth app ', history.location.pathname)
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/auth/signin'>
          <SignIn onSignIn={(user: string, password: string) => onSignIn(user, password)} />
        </Route>
        <Route exact path='/auth/signup'>
          <SignUp onSignUp={(user: string, password: string) => onSignUp(user, password)} />
        </Route>
        <Route path='/'>
          {/* <Redirect to='/auth/signin' /> */}
          <SignIn onSignIn={(user: string, password: string) => onSignIn(user, password)} />
        </Route>
      </Switch>
    </Router>
  );
};
