import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import styles from './payment-form.module.scss';
import paymentProcessingSlice from '../../store/payment-processing/payment-processing-slice';
import { paymentProcessingFormSelector } from '../../store/payment-processing/payment-processing-selector';
import PaymentInfoFormField from '../../models/PaymentInfoFormField.enum';


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const {
    paymentInfoForm,
  } = useSelector(paymentProcessingFormSelector);
  const dispatch = useDispatch();
  const {
    updateForm,
  } = paymentProcessingSlice.actions;
  
  const handleFieldChange = (field: PaymentInfoFormField) => (ev: React.FormEvent<HTMLInputElement>) => {
    ev.preventDefault();
    dispatch(updateForm({ field, value: ev.currentTarget.value }));
  };

  return (
    <form className={classNames("pure-form pure-form-stacked", styles.form)}>
      <fieldset>
        <legend>Billing Information</legend>
        <div className={"pure-g"}>
           <div className="pure-u-1 pure-u-md-1-2">
            <input id="firstName" type="text"
                   placeholder="First Name"
                   onChange={handleFieldChange(PaymentInfoFormField.firstName)}
                   value={paymentInfoForm.getWithDefault(PaymentInfoFormField.firstName,'')}
                   maxLength={25}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <input id="lastName" type="text"
                   placeholder="Last Name"
                   onChange={handleFieldChange(PaymentInfoFormField.lastName)}
                   value={paymentInfoForm.getWithDefault(PaymentInfoFormField.lastName,'')}
                   maxLength={25}
                   required
            />
          </div>
          <div className="pure-u-1">
            <input id="address" type="text"
                   placeholder="Address"
                   onChange={handleFieldChange(PaymentInfoFormField.billingStreetAddress)}
                   value={paymentInfoForm.getWithDefault(PaymentInfoFormField.billingStreetAddress,'')}
                   maxLength={50}
                   className={styles.input95}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <input id="city" type="text"
                   placeholder="City"
                   onChange={handleFieldChange(PaymentInfoFormField.billingCity)}
                   value={paymentInfoForm.getWithDefault(PaymentInfoFormField.billingCity,'')}
                   maxLength={50}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <input id="state" type="text"
                   placeholder="State"
                   onChange={handleFieldChange(PaymentInfoFormField.billingState)}
                   value={paymentInfoForm.getWithDefault(PaymentInfoFormField.billingState,'')}
                   maxLength={2}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <input id="postalCode" type="number"
                   placeholder="Postal Code"
                   onChange={handleFieldChange(PaymentInfoFormField.billingPostalCode)}
                   value={paymentInfoForm.getWithDefault(PaymentInfoFormField.billingPostalCode,'')}
                   maxLength={15}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <input id="email" type="email"
                   placeholder="Email"
                   onChange={handleFieldChange(PaymentInfoFormField.email)}
                   value={paymentInfoForm.getWithDefault(PaymentInfoFormField.email,'')}
                   maxLength={50}
                   required
            />
          </div>
        </div>
        </fieldset>
    <fieldset>
      <legend>Shipping Info</legend>
      <div className={"pure-g"}>
        <div className="pure-u-1">
          <input id="address" type="text"
                 placeholder="Address"
                 onChange={handleFieldChange(PaymentInfoFormField.shippingStreetAddress)}
                 value={paymentInfoForm.getWithDefault(PaymentInfoFormField.shippingStreetAddress,'')}
                 maxLength={50}
                 className={styles.input95}
                 required
          />
        </div>
        <div className="pure-u-1 pure-u-md-1-2">
          <input id="city" type="text"
                 placeholder="City"
                 onChange={handleFieldChange(PaymentInfoFormField.shippingCity)}
                 value={paymentInfoForm.getWithDefault(PaymentInfoFormField.shippingCity,'')}
                 maxLength={50}
                 required
          />
        </div>
        <div className="pure-u-1 pure-u-md-1-2">
          <input id="state" type="text"
                 placeholder="State"
                 onChange={handleFieldChange(PaymentInfoFormField.shippingState)}
                 value={paymentInfoForm.getWithDefault(PaymentInfoFormField.shippingState,'')}
                 maxLength={2}
                 required
          />
        </div>
        <div className="pure-u-1 pure-u-md-1-2">
          <input id="postalCode" type="number"
                 placeholder="Postal Code"
                 onChange={handleFieldChange(PaymentInfoFormField.shippingPostalCode)}
                 value={paymentInfoForm.getWithDefault(PaymentInfoFormField.shippingPostalCode,'')}
                 maxLength={15}
                 required
          />
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend>Credit Card</legend>
        <div className={"pure-g"}>
          <div className="pure-u-1 pure-u-md-2-3">
            <label htmlFor="cardNumber" className={styles.cardElementLabel}>Card Number</label>
            <div className={styles.padRight}>
              <CardNumberElement className={styles.cardElement} />
            </div>
          </div>
          <div className={classNames("pure-u-1 pure-u-md-1-3")}>
            <label htmlFor="cardExp" className={styles.cardElementLabel}>Expiration</label>
            <div className={styles.padRight}>
              <CardExpiryElement className={styles.cardElement} />
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3">
            <label htmlFor="cvc" className={styles.cardElementLabel}>CVC</label>
            <CardCvcElement className={styles.cardElement} />
          </div>
        </div>
      </fieldset>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_eGNpu8CRF27Jo28PGUjIwu7t00JIbgA8Tm');


const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentForm;