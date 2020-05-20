// Cant keep stripe object in redux store.  Using module to prevent having to load stripe multiple times.

import { Stripe } from '@stripe/stripe-js';

type LoadedStripe = Stripe | null;

let stripe: LoadedStripe = null;

export const setStripe = (loadedStripe: LoadedStripe) => {
  stripe = loadedStripe;
};

export const getStripe = () => stripe;
