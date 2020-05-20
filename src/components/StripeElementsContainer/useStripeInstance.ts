import { useSelector } from 'react-redux';
import { configStateSelector } from '../../store/config/config-selector';
import { getStripe } from './StripeGlobalStore';
import { Stripe } from '@stripe/stripe-js';

const useStripeInstance: () => Stripe | null = () => {
  const {
    stripeIsLoaded,
  } = useSelector(configStateSelector);
  
  if (stripeIsLoaded) {
    return getStripe();
  }
  
  return null;
};

export default useStripeInstance;