import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../../../Icons/ShoppingCartIcon';
import styles from './shopping-cart-drawer-header.module.scss';
import { asPriceString } from '../../../../helpers/helpers';

interface ShoppingCartDrawerHeaderProps {
  subtotal: number;
}

const ShoppingCartDrawerHeader = ({ subtotal }: ShoppingCartDrawerHeaderProps) => {
  return (
    <div className={styles.drawerHeaderContainer}>
      <div className={styles.cartIconSection}>
        <div className={styles.iconContainer}><ShoppingCartIcon /></div>
        <span className={styles.cartTitle}>Cart</span>
      </div>
      <div className={styles.subtotalContainer}>
        <span className={styles.subtotalLabel}>Subtotal:</span>
        <span className={styles.subtotal}>${asPriceString(subtotal)}</span>
      </div>
      <div className={styles.checkoutButtonContainer}>
        <Link to="/checkout" className={styles.checkoutButton}>Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default ShoppingCartDrawerHeader;