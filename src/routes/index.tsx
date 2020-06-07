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
import OrderDetails from '../pages/OrderDetails/OrderDetails';
import About from '../pages/About/About';
import ContactUs from '../pages/ContactUs/ContactUs';
import ComingSoon from '../pages/ComingSoon/ContactUs';

const Routes = () => (
  <Switch>
    <Route path="/" component={ComingSoon} />
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={ContactUs} />
    <Route path="/checkout" exact component={Checkout} isPrivate />
    <Route path="/billing-info" exact component={BillingInfo} isPrivate />
    <Route path="/payment-complete/:orderId" exact component={PaymentComplete} isPrivate />
    <Route path="/details/:itemId" component={Details} isPrivate />
    <Route path="/search/:searchString" component={SearchResults} isPrivate />
    <Route path="/order" exact component={OrderSearch} isPrivate />
    <Route path="/order/:orderId" exact component={OrderDetails} isPrivate />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
