import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './billing-info-card.module.scss';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import LoadingWithOverlay from '../../components/LoadingWithOverlay/LoadingWithOverlay';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { shoppingCartItemsSelector } from '../../store/shopping-cart/shopping-cart-selector';
import { asPriceString } from '../../helpers/helpers';
import { fetchConfig } from '../../store/config/config-thunks';
import { configStateSelector } from '../../store/config/config-selector';
import {
  Elements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { getStripe, setStripe } from './StripeGlobalStore';

const ReviewCart = () => {
  const items = useSelector(shoppingCartItemsSelector);
  const [stripeInstance, setStripeInstance] = useState(getStripe());
  const {
    hasFetchedConfig,
    isFetchingConfig,
    publishableStripeKey,
    configFetchError,
  } = useSelector(configStateSelector);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!(stripeInstance || hasFetchedConfig || isFetchingConfig)) {
      dispatch(fetchConfig());
    }
  }, []);

  useEffect(() => {
    if (hasFetchedConfig && publishableStripeKey && !stripeInstance) {
      loadStripe(publishableStripeKey)
        .then(stripe => {
          setStripe(stripe)
          setStripeInstance(stripe)
        });
    }
  }, [publishableStripeKey]);

  let subtotal = 0;
  let processingFee = 0;
  let shippingCost = 0;
  
  if (items) {
    subtotal = items.reduce((t, cartItem) => {
      return t + cartItem.inventoryItem.price * cartItem.quantityToBuy;
    }, 0);
  }
  
  const handlePlaceOrderClick = (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
  };

  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    { (isFetchingConfig || !stripeInstance) && <LoadingWithOverlay contained />}
    <section>
      <header className={styles.header}>
        <h2>Billing and Shipping</h2>
      </header>
      { configFetchError && (
        <div className={styles.errorContainer}>
          <ErrorMessage message={configFetchError} />
        </div>
      )}
    </section>
    <Elements stripe={stripeInstance}>
      <div className={"pure-g"}>
        <div className={"pure-u-2-3"}>
          <div className={styles.contentContainer}>
            <PaymentForm />
          </div>
        </div>
        <div className={"pure-u-1-3"}>
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
    </Elements>
  </section>)
};

export default ReviewCart;