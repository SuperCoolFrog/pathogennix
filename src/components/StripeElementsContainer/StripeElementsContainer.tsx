import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConfig } from '../../store/config/config-thunks';
import { configStateSelector } from '../../store/config/config-selector';
import configSlice from '../../store/config/config-slice';
import { loadStripe } from '@stripe/stripe-js';
import { getStripe, setStripe } from './StripeGlobalStore';
import {
  Elements,
} from '@stripe/react-stripe-js';


interface StripeElementsContainerProps {
  children: React.ReactElement;
}

const StripeElementsContainer = ({ children }: StripeElementsContainerProps) => {
  const [stripeInstance, setStripeInstance] = useState(getStripe());
  const {
    hasFetchedConfig,
    isFetchingConfig,
    publishableStripeKey,
    stripeIsLoaded,
  } = useSelector(configStateSelector);
  const dispatch = useDispatch();
  const {
    stripeRequested,
    stripeRequestSucceeded,
    stripeRequestFailed,
  } = configSlice.actions;
  
  useEffect(() => {
    if (!(stripeInstance || hasFetchedConfig || isFetchingConfig)) {
      dispatch(fetchConfig());
    }
  }, []);

  useEffect(() => {
    if (hasFetchedConfig && publishableStripeKey && !stripeInstance) {
      dispatch(stripeRequested());
      loadStripe(publishableStripeKey)
        .then(stripe => {
          setStripe(stripe)
          setStripeInstance(stripe)
          dispatch(stripeRequestSucceeded());
        }).catch(e => {
          dispatch(stripeRequestFailed(e.message));
        });
    }
  }, [publishableStripeKey]);
  
  if (!(stripeInstance && hasFetchedConfig)) {
    return <>{children}</>;
  }

  return (<Elements stripe={stripeInstance}>
    {children}
  </Elements>);
};

export default StripeElementsContainer;