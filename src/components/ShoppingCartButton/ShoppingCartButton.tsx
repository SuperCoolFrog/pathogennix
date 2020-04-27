import React from 'react';
import styles from './shopping-cart-button.module.scss';
import ShoppingCartIcon from '../Icons/ShoppingCartIcon';

interface ShoppingCartButtonProps {
  itemCount: number;
  subtotal: number;
  onClick: () => void;
}

const ShoppingCartButton = ({ onClick, itemCount, subtotal }: ShoppingCartButtonProps) => {

  
  return (<div className={styles.container}>
    <button className={styles.shoppingCartButton} onClick={onClick}>
      <span className={styles.iconContainer}><ShoppingCartIcon /></span>
      <span className={styles.itemCountContainer}>({itemCount})</span>
    </button>
    <div className={styles.subtotalContainer}>subtotal: {subtotal}</div>
  </div>);
};

export default ShoppingCartButton;