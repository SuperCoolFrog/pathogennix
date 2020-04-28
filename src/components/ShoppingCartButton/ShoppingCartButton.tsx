import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './shopping-cart-button.module.scss';
import ShoppingCartIcon from '../Icons/ShoppingCartIcon';
import shoppingCartSlice from '../../store/shopping-cart/shopping-cart-slice';

interface ShoppingCartButtonProps {
  itemCount: number;
  subtotal: number;
}

const ShoppingCartButton = ({ itemCount, subtotal }: ShoppingCartButtonProps) => {
  const dispatch = useDispatch();
  const { openDrawer } = shoppingCartSlice.actions;

  const onClick = () => {
    dispatch(openDrawer());
  };

  
  return (<div className={styles.container}>
    <button className={styles.shoppingCartButton} onClick={onClick}>
      <span className={styles.iconContainer}><ShoppingCartIcon /></span>
      <span className={styles.itemCountContainer}>({itemCount})</span>
    </button>
    <div className={styles.subtotalContainer}>subtotal: {subtotal}</div>
  </div>);
};

export default ShoppingCartButton;