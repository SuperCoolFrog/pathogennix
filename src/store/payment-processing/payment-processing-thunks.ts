import api from '../../api';
import { AppThunk } from '../index';
import paymentProcessingSlice from './payment-processing-slice';
import shoppingCartSlice from '../shopping-cart/shopping-cart-slice';
import { Stripe } from '@stripe/stripe-js';
import HashMap from '../../models/HashMap';
import ShoppingCartItem from '../../models/ShoppingCartItem';
import PaymentInfoFormField from '../../models/PaymentInfoFormField.enum';
import history from '../../routes/history';

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

export const orderComplete = (orderId: string): AppThunk => (dispatch) => {
  const { clearCart } = shoppingCartSlice.actions;
  const { paymentProcessingComplete, clearForm } = paymentProcessingSlice.actions;
  
  dispatch(clearCart());
  dispatch(paymentProcessingComplete(orderId));
  dispatch(clearForm());
  history.push(`/payment-complete/${orderId}`)
};