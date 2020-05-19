import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ConfigSettings from '../../models/ConfigSettings';
import HashMap from '../../models/HashMap';
import PaymentInfoFormField from '../../models/PaymentInfoFormField.enum';
import validateTruthyValue from '../../helpers/validate-truthy-value';

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
  paymentInfoForm: HashMap<PaymentInfoFormField, string>;
  validationErrors: PaymentInfoFormField[],
  paymentInfoFormIsValid: boolean;
}

const paymentProcessingSlice = createSlice({
  name: 'paymentProcessingSlice',
  initialState: {
    isProcessing: false,
    settingsAreLoaded: false,
    settingsAreLoading: false,
    paymentModalIsVisible: false,
    paymentInfoForm: new HashMap<PaymentInfoFormField, string>(),
    validationErrors: new Array<PaymentInfoFormField>(),
    paymentInfoFormIsValid: false,
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
    updateForm(state, action: PayloadAction<{field: PaymentInfoFormField, value: string}>) {
      const { field, value} = action.payload;
      
      state.paymentInfoForm.set(field, value);
      
      const validationErrors = validateTruthyValue(state.paymentInfoForm.ref());

      state.validationErrors = validationErrors;
      state.paymentInfoFormIsValid = !validationErrors.length;
    },
    clearForm(state) {
      state.paymentInfoForm.clear();
      state.paymentInfoFormIsValid = false;
      state.validationErrors = new Array<PaymentInfoFormField>();
    },
  }
});

export default paymentProcessingSlice;

