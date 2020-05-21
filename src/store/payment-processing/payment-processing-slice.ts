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
  processingError: string;
  paymentIntent: PaymentIntentInfo;
  paymentModalIsVisible: boolean;
  paymentInfoForm: HashMap<PaymentInfoFormField, string>;
  validationErrors: PaymentInfoFormField[],
  paymentInfoFormIsValid: boolean;
  orderId: string;
}

const paymentProcessingSlice = createSlice({
  name: 'paymentProcessingSlice',
  initialState: {
    isProcessing: false,
    processingError: '',
    paymentModalIsVisible: false,
    paymentInfoForm: new HashMap<PaymentInfoFormField, string>(),
    validationErrors: new Array<PaymentInfoFormField>(),
    paymentInfoFormIsValid: false,
    orderId: '',
  } as PaymentProcessingState,
  reducers: {
    paymentIsProcessing(state) {
      state.isProcessing = true;
    },
    paymentProcessingComplete(state, action: PayloadAction<string>) {
      state.isProcessing = false;
      state.orderId = action.payload;
    },
    paymentProcessingError(state, action: PayloadAction<string>) {
      state.isProcessing = false;
      state.processingError = action.payload;
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

