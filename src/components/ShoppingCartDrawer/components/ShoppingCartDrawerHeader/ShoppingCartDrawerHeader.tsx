import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../../../Icons/ShoppingCartIcon';
import styles from './shopping-cart-drawer-header.module.scss';
import { asPriceString } from '../../../../helpers/helpers';
import shoppingCartSlice from '../../../../store/shopping-cart/shopping-cart-slice';

interface ShoppingCartDrawerHeaderProps {
  subtotal: number;
}

const ShoppingCartDrawerHeader = ({ subtotal }: ShoppingCartDrawerHeaderProps) => {
  const dispatch = useDispatch();
  
  const { closeDrawer } = shoppingCartSlice.actions;
  
  const handleClick = () => {
    dispatch(closeDrawer());
  };

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
        <Link to="/checkout" className={styles.checkoutButton} onClick={handleClick}>Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default ShoppingCartDrawerHeader;