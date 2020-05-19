import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ConfigSettings from '../../models/ConfigSettings';

interface ConfigState {
  publishableStripeKey: string;
  hasFetchedConfig: boolean;
  isFetchingConfig: boolean;
    configFetchError: string;
}

const configSlice = createSlice({
  name: 'config',
  initialState: {
    publishableStripeKey: '',
    hasFetchedConfig: false,
    isFetchingConfig: false,
    configFetchError: '',
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
    }
  }
});

export default configSlice;
