import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ConfigSettings from '../../models/ConfigSettings';

export interface PaymentIntentInfo {
  clientSecret: string;
}

export interface PaymentProcessingState {
  isProcessing: boolean;
  paymentIntent: PaymentIntentInfo;
  settingsAreLoaded: boolean;
  settingsAreLoading: boolean;
  configSettings: ConfigSettings;
  configSettingsLoadingError: string;
  paymentModalIsVisible: boolean;
}

const paymentProcessingSlice = createSlice({
  name: 'paymentProcessingSlice',
  initialState: {
    isProcessing: false,
    settingsAreLoaded: false,
    settingsAreLoading: false,
    paymentModalIsVisible: false,
  } as PaymentProcessingState,
  reducers: {
    paymentIsProcessing(state) {
      state.isProcessing = true;
    },
    paymentProcessingEnded(state) {
      state.isProcessing = false;
    },
    settingsAreLoading(state) {
      state.settingsAreLoading = true;
      state.settingsAreLoaded = false;
    },
    settingsHaveLoaded(state, action: PayloadAction<ConfigSettings>) {
      state.configSettings = action.payload;
    },
    loadingHasCompleted(state) {
      state.settingsAreLoading = false;
      state.settingsAreLoaded = true;
    },
    loadingSettingsHasFailed(state, action: PayloadAction<string>) {
      state.settingsAreLoading = false;
      state.settingsAreLoaded = true;
      state.configSettingsLoadingError = action.payload;
    },
    showPaymentModal(state) {
      state.paymentModalIsVisible = true;
    },
    hidePaymentModal(state) {
      state.paymentModalIsVisible = false;
    },
  }
});

export default paymentProcessingSlice;

