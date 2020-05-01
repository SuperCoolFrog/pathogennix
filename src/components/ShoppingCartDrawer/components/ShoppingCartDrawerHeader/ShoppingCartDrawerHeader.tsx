import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/checkout" className={styles.checkoutButton}>Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default ShoppingCartDrawerHeader;