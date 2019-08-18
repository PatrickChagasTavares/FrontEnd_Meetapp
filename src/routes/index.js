import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Meetup from '../pages/Meetup';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/details" exact component={Details} />
      <Route path="/meetup" exact component={Meetup} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
}
