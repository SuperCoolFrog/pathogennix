import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ConfigSettings from '../../models/ConfigSettings';

interface ConfigState {
  publishableStripeKey: string;
  hasFetchedConfig: boolean;
  isFetchingConfig: boolean;
  configFetchError: string;
  isLoadingStripe: boolean;
  stripeIsLoaded: boolean;
  stripeError: string;
}

const configSlice = createSlice({
  name: 'config',
  initialState: {
    publishableStripeKey: '',
    hasFetchedConfig: false,
    isFetchingConfig: false,
    configFetchError: '',
    isLoadingStripe: false,
    stripeIsLoaded: false,
    stripeError: '',
  } as ConfigState,
  reducers: {
    configRequested(state) {
      state.hasFetchedConfig = false;
      state.isFetchingConfig = true;
    },
    configRequestSucceeded(state, action: PayloadAction<ConfigSettings>) {
      state.hasFetchedConfig = true;
      state.isFetchingConfig = false;
      state.publishableStripeKey = action.payload.publishableKey || '';
    },
    configRequestFailed(state, action: PayloadAction<string>) {
      state.hasFetchedConfig = true;
      state.isFetchingConfig = false;
      state.configFetchError = 'An error occurred with our system.  Please try again later';
    },
    stripeRequested(state) {
      state.isLoadingStripe = true;
      state.stripeIsLoaded = false;
    },
    stripeRequestSucceeded(state) {
      state.isLoadingStripe = false;
      state.stripeIsLoaded = true;
    },
    stripeRequestFailed(state, action: PayloadAction<string>) {
      state.isLoadingStripe = false;
      state.stripeIsLoaded = true;
      state.stripeError = 'An internal error has occurred loading our payment management system.  Please try again later;';
    },
  }
});

export default configSlice;
