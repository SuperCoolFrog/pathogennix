import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './review-cart.module.scss';
import ShoppingCartItem from '../../models/ShoppingCartItem';
import ItemDetailsRow from './components/ItemDetailsRow/ItemDetailsRow';
import { shoppingCartItemsSelector } from '../../store/shopping-cart/shopping-cart-selector';
import { asPriceString } from '../../helpers/helpers';
import { getProcessingFee, getShippingFee } from '../../helpers/fee-calculator';
import addDays from 'date-fns/fp/addDays';
import { format } from 'date-fns';


const ReviewCart = () => {
  const items = useSelector(shoppingCartItemsSelector);

  let subtotal = 0;
  let processingFee = 0;
  let shippingCost = 0;
  let estimatedShippingDateMod = 0;
  let estimatedShippingDate;
  
  if (items) {
    items.forEach((cartItem) => {
      subtotal = subtotal  + cartItem.inventoryItem.price * cartItem.quantityToBuy;
      shippingCost = shippingCost + cartItem.inventoryItem.shippingCost * cartItem.quantityToBuy;
      if (estimatedShippingDateMod < cartItem.inventoryItem.shippingDateModifierDays) {
       estimatedShippingDateMod = cartItem.inventoryItem.shippingDateModifierDays;
      }
    });
    processingFee = getProcessingFee(subtotal + shippingCost);
    const tmpDate = new Date();
    estimatedShippingDate = format(addDays(estimatedShippingDateMod, tmpDate), 'MMMM d');
  }
  
  const handleLinkClick = (ev: React.FormEvent) => {
    if (!(items && items.length)) {
      ev.preventDefault();
    }
  }; 
  
  

  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    <section className={styles.reviewCartContainer}>
      <header className={styles.header}>
        <h2>Review Cart</h2>
      </header>
      <div className={"pure-g"}>
        <div className={"pure-u-1 pure-u-md-2-3"}>
          <div className={styles.contentContainer}>
            {items.map(item => (
              <ItemDetailsRow cartItem={item} key={item.inventoryItem.itemId} />
            ))}
            {!(items && items.length) && <p className={styles.noItems}>No Items have been added to your cart.</p>}
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
                <tr>
                  <td>Ships</td>
                  <td><em>{estimatedShippingDate}</em></td>
                </tr>
              </tbody>
            </table>
            <div className={styles.totalContainer}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.total}>${asPriceString(subtotal + processingFee + shippingCost)}</span>
            </div>
            <div className={styles.billingButtonContainer}>
              <Link to="/billing-info" className={styles.billingButton} onClick={handleLinkClick}>Proceed to Payment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>);
  
};

export default ReviewCart;