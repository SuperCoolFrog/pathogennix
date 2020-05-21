import api from '../../api';
import { AppThunk } from '../index';
import paymentProcessingSlice from './payment-processing-slice';
import { Stripe } from '@stripe/stripe-js';
import HashMap from '../../models/HashMap';
import ShoppingCartItem from '../../models/ShoppingCartItem';
import PaymentInfoFormField from '../../models/PaymentInfoFormField.enum';

const formFieldKeyToString = (field: PaymentInfoFormField): string => {
  return PaymentInfoFormField[field];
};

export const placeOrder = (
  stripeInstance: Stripe,
  items: ShoppingCartItem[],
  form: HashMap<PaymentInfoFormField, string>
): AppThunk => async (dispatch) => {
  const {
    paymentIsProcessing,
    paymentProcessingComplete,
    paymentProcessingError,
  } = paymentProcessingSlice.actions;
  
  const billingAndShippingJSON = JSON.stringify(form.toJSONMap(formFieldKeyToString));
  
  dispatch(paymentIsProcessing());
  
  try {
    const paymentIntentResponse = await api.payments.placeOrder(items, billingAndShippingJSON);
  } catch(e) {
    dispatch(paymentProcessingError(e.message));
  }
};