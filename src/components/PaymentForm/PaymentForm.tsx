import React, { useState } from 'react';
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

interface PaymentFormFields {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  postalCode: string;
  email:string;
}

const initialState: PaymentFormFields = {
  firstName: '',
  lastName: '',
  city: '',
  state: '',
  postalCode: '',
  email: '',
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [formFields, updateFormFields] = useState(initialState);
  
  
  const handleFieldChange = (name: string) => (ev: React.FormEvent<HTMLInputElement>) => {
    ev.preventDefault();
    updateFormFields({
      ...formFields,
      [name]: ev.currentTarget.value,
    })
  };

  const handleSubmit = async (event: React.FormEvent) => {
    // event.preventDefault();
    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: elements.getElement(CardElement),
    // });
  };

  return (
    <form onSubmit={handleSubmit} className={classNames("pure-form pure-form-stacked", styles.form)}>
      <fieldset>
        <div className={"pure-g"}>
           <div className="pure-u-1 pure-u-md-1-2">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text"
                   placeholder="First Name"
                   onChange={handleFieldChange('firstName')}
                   value={formFields.firstName}
                   maxLength={25}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text"
                   placeholder="Last Name"
                   onChange={handleFieldChange('lastName')}
                   value={formFields.lastName}
                   maxLength={25}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <label htmlFor="city">City</label>
            <input id="city" type="text"
                   placeholder="City"
                   onChange={handleFieldChange('city')}
                   value={formFields.city}
                   maxLength={50}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <label htmlFor="state">State</label>
            <input id="state" type="text"
                   placeholder="State"
                   onChange={handleFieldChange('state')}
                   value={formFields.state}
                   maxLength={2}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <label htmlFor="zip">Zip</label>
            <input id="postalCode" type="number"
                   placeholder="Postal Code"
                   onChange={handleFieldChange('postalCode')}
                   value={formFields.postalCode}
                   maxLength={15}
                   required
            />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <label htmlFor="email">Email</label>
            <input id="email" type="email"
                   placeholder="Email"
                   onChange={handleFieldChange('email')}
                   value={formFields.email}
                   maxLength={50}
                   required
            />
          </div>
          <div className="pure-u-1"><hr /></div>
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
          <div className="pure-u-1">
            <button type="submit" disabled={!stripe}>
              Pay
            </button>
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