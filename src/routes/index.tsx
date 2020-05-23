import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Route from './RouteWrapper';

import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import Checkout from '../pages/Checkout/Checkout';
import BillingInfo from '../pages/BillingInfo/BillingInfo';
import PaymentComplete from '../pages/PaymentComplete/PaymentComplete';
import SearchResults from '../pages/SearchResults/SearchResults';
import OrderSearch from '../pages/OrderSearch/OrderSearch';

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
    <Route path="/" exact component={Home} isPrivate />
    <Route path="/checkout" exact component={Checkout} isPrivate />
    <Route path="/billing-info" exact component={BillingInfo} isPrivate />
    <Route path="/payment-complete" exact component={PaymentComplete} isPrivate />
    <Route path="/details/:itemId" component={Details} isPrivate />
    <Route path="/search/:searchString" component={SearchResults} isPrivate />
    <Route path="/order" exact component={OrderSearch} isPrivate />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
