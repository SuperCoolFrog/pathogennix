import React from 'react';
import ShoppingCartIcon from '../../../Icons/ShoppingCartIcon';
import styles from './shopping-cart-drawer-header.module.scss';

const ShoppingCartDrawerHeader = () => {
  return (
    <div className={styles.drawerHeaderContainer}>
      <div className={styles.cartIconSection}>
        <div className={styles.iconContainer}><ShoppingCartIcon /></div>
        <span className={styles.cartTitle}>Cart</span>
      </div>
      <div className={styles.subtotalContainer}>
        <span className={styles.subtotalLabel}>Subtotal:</span>
        <span className={styles.subtotal}>$1.00</span>
      </div>
      <div className={styles.checkoutButtonContainer}>
        <a href="/checkout" className={styles.checkoutButton}>Proceed to Checkout</a>
      </div>
    </div>
  );
};

export default ShoppingCartDrawerHeader;