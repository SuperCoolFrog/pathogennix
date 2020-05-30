import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';
import styles from './billing-info-card.module.scss';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import LoadingWithOverlay from '../../components/LoadingWithOverlay/LoadingWithOverlay';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { shoppingCartItemsSelector } from '../../store/shopping-cart/shopping-cart-selector';
import { asPriceString } from '../../helpers/helpers';
import { configStateSelector } from '../../store/config/config-selector';
import useStripeInstance from '../StripeElementsContainer/useStripeInstance';
import paymentProcessingSlice from '../../store/payment-processing/payment-processing-slice';
import { paymentProcessingFormSelector, paymentProcessingStateSelector } from '../../store/payment-processing/payment-processing-selector';
import { orderComplete } from '../../store/payment-processing/payment-processing-thunks';
import PaymentInfoFormField from '../../models/PaymentInfoFormField.enum';
import api from '../../api';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';
import { getProcessingFee, getShippingFee } from '../../helpers/fee-calculator';

const formFieldKeyToString = (field: PaymentInfoFormField): string => {
  return PaymentInfoFormField[field];
};

const BillingInfoCard = () => {
  const items = useSelector(shoppingCartItemsSelector);
  const {
    isFetchingConfig,
    isLoadingStripe,
    configFetchError,
  } = useSelector(configStateSelector);
  const dispatch = useDispatch();
  const {
    paymentInfoForm,
  } = useSelector(paymentProcessingFormSelector);
  const {
    orderId,
    isProcessing,
    processingError,
  } = useSelector(paymentProcessingStateSelector);
  const elements = useElements();
  const stripe = useStripe();

  let subtotal = 0;
  let processingFee = 0;
  let shippingCost = 0;

  if (items && items.length) {
    subtotal = items.reduce((t, cartItem) => {
      return t + cartItem.inventoryItem.price * cartItem.quantityToBuy;
    }, 0);
    shippingCost = items.reduce((t, cartItem) => {
      return t + cartItem.inventoryItem.shippingCost * cartItem.quantityToBuy;
    }, 0);
    processingFee = getProcessingFee(subtotal + shippingCost);
  } else {
    return <Redirect to="/checkout" />
  }


  const handlePlaceOrderClick = async (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    const {
      paymentIsProcessing,
      paymentProcessingError,
    } = paymentProcessingSlice.actions;
    const cardNumberElement = elements?.getElement(CardNumberElement);
    const billingAndShippingJSON = JSON.stringify(paymentInfoForm.toJSONMap(formFieldKeyToString));

    dispatch(paymentIsProcessing());

    try {
      const paymentIntentResponse = await api.payments.placeOrder(items, billingAndShippingJSON);

      // @ts-ignore
      const result = await stripe.confirmCardPayment(paymentIntentResponse.clientSecret, {
        payment_method: {
          // @ts-ignore
          card: cardNumberElement,
          billing_details: {
            name: `${paymentInfoForm.get(PaymentInfoFormField.firstName)} ${paymentInfoForm.get(PaymentInfoFormField.lastName)}`,
            address: {
              city: paymentInfoForm.get(PaymentInfoFormField.billingCity),
              state: paymentInfoForm.get(PaymentInfoFormField.billingState),
              postal_code: paymentInfoForm.get(PaymentInfoFormField.billingPostalCode),
            },
            email: paymentInfoForm.get(PaymentInfoFormField.email),
          },
        },
        receipt_email: paymentInfoForm.get(PaymentInfoFormField.email),
      });

      dispatch(orderComplete(paymentIntentResponse.orderId));
    } catch (e) {
      dispatch(paymentProcessingError(e.message));
    }
  };

  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    {(isFetchingConfig || isLoadingStripe || isProcessing) && <LoadingWithOverlay contained />}
    <section>
      <header className={styles.header}>
        <h2>Billing and Shipping</h2>
      </header>
      {configFetchError && (
        <div className={styles.errorContainer}>
          <ErrorMessage message={configFetchError} />
        </div>
      )}
      {processingError && (
        <div className={styles.errorContainer}>
          <ErrorMessage message={processingError} />
        </div>
      )}
    </section>
    <div className={"pure-g"}>
      <div className={"pure-u-1 pure-u-md-2-3"}>
        <div className={styles.contentContainer}>
          <PaymentForm />
        </div>
      </div>
      <div className={"pure-u-1 pure-u-md-1-3"}>
        <div className={styles.actionsContainer}>
          <table className={styles.totalsTable}>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${asPriceString(subtotal)}</td>
              </tr>
              <tr>
                <td>Processing Fee</td>
                <td>${asPriceString(processingFee)}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>${asPriceString(shippingCost)}</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.totalContainer}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.total}>${asPriceString(subtotal + processingFee + shippingCost)}</span>
          </div>
          <div className={styles.placeOrderButtonContainer}>
            <button className={styles.placeOrderButton} onClick={handlePlaceOrderClick}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default BillingInfoCard;