import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './review-cart.module.scss';
import InventoryItem from '../../models/InventoryItem';
import ItemDetailsRow from './components/ItemDetailsRow/ItemDetailsRow';

const demoItems: InventoryItem[] = [
];


const ReviewCart = () => {
  const items = [] as InventoryItem[];

  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    <section className={styles.reviewCartContainer}>
      <header className={styles.header}>
        <h2>Review Cart</h2>
      </header>
      <div className={"pure-g"}>
        <div className={"pure-u-2-3"}>
          <div className={styles.contentContainer}>
            {items.map(item => (
              <ItemDetailsRow item={item} />
            ))}
            {!(items && items.length) && <p className={styles.noItems}>No Items have been added to your cart.</p>}
          </div>
        </div>
        <div className={"pure-u-1-3"}>
          <div className={styles.actionsContainer}>
            <table className={styles.totalsTable}>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>$1.00</td>
                </tr>
                <tr>
                  <td>Processing Fee</td>
                  <td>$1.00</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$1.00</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.totalContainer}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.total}>$1.00</span>
            </div>
            <div className={styles.billingButtonContainer}>
              <Link to="/billing-info" className={styles.billingButton}>Proceed to Payment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>);
  
};

export default ReviewCart;