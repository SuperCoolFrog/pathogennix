import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './billing-info-card.module.scss';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import { shoppingCartItemsSelector } from '../../store/shopping-cart/shopping-cart-selector';
import { asPriceString } from '../../helpers/helpers';


const ReviewCart = () => {
  const items = useSelector(shoppingCartItemsSelector);

  let subtotal = 0;
  let processingFee = 0;
  let shippingCost = 0;
  
  if (items) {
    subtotal = items.reduce((t, cartItem) => {
      return t + cartItem.inventoryItem.price * cartItem.quantityToBuy;
    }, 0);
  }

  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    <section>
      <header className={styles.header}>
        <h2>Billing and Shipping</h2>
      </header>
    </section>
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
            <button className={styles.placeOrderButton}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </section>)
};

export default ReviewCart;