import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Route from './RouteWrapper';

// import Inventory from '../features/Inventory/Inventory';
// import Home from '../features/Home/Home';
// import Purchases from '../features/Purchases/Purchases';
// import Help from '../features/Help/Help';
// import Settings from '../features/Settings/Settings';
// import SignIn from '../features/SignIn/SignIn';

const Routes = () => (
  <Switch>
    {/**
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/inventory" component={Inventory} isPrivate />
      <Route path="/purchases" component={Purchases} isPrivate />
      <Route path="/help" component={Help} isPrivate />
      <Route path="/settings" component={Settings} isPrivate />
      <Route path="/sign-in" component={SignIn} />
   */}
    <Redirect to="/" />
  </Switch>
);

export default Routes;
