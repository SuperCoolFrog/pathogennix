import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './shopping-cart-button.module.scss';
import ShoppingCartIcon from '../Icons/ShoppingCartIcon';
import shoppingCartSlice from '../../store/shopping-cart/shopping-cart-slice';
import { shoppingCartItemsSelector } from '../../store/shopping-cart/shopping-cart-selector';
import { asPriceString } from '../../helpers/helpers';

const ShoppingCartButton = () => {
  const dispatch = useDispatch();
  const { openDrawer } = shoppingCartSlice.actions;
  const shoppingCartItems = useSelector(shoppingCartItemsSelector);

  const onClick = () => {
    dispatch(openDrawer());
  };

  let subtotal = 0;
  let totalQuantity = 0;
  
  if (shoppingCartItems) {
    const totals = shoppingCartItems.reduce(([accSubtotal, accQuantity], cartItem) => {
      const nextSubtotal = accSubtotal + cartItem.inventoryItem.price * cartItem.quantityToBuy;
      const nextQuantity = accQuantity + cartItem.quantityToBuy;
      return [nextSubtotal, nextQuantity];
    }, [0, 0]);
    
    subtotal = totals[0];
    totalQuantity = totals[1];
  }

  
  return (<div className={styles.container}>
    <button className={styles.shoppingCartButton} onClick={onClick}>
      <span className={styles.iconContainer}><ShoppingCartIcon /></span>
      <span className={styles.itemCountContainer}>({totalQuantity})</span>
    </button>
    <div className={styles.subtotalContainer}>subtotal: ${asPriceString(subtotal)}</div>
  </div>);
};

export default ShoppingCartButton;