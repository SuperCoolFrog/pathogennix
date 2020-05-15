import React from 'react';
import styles from './shopping-cart-items.module.scss';
import ShoppingCartItem from '../../../../models/ShoppingCartItem';
import CartListItem from '../CartItemListItem/CartItemListItem';

interface ShoppingCartItemsProps {
  cartItems?: ShoppingCartItem[];
}

const ShoppingCartItems = ({ cartItems }: ShoppingCartItemsProps) => {
  return (<div className={styles.container}>
    {!(cartItems && cartItems.length) && <p className={styles.noItemsText}>No cartItems in your cart</p>}
    {cartItems && cartItems.map(cartItem => (<CartListItem key={cartItem.inventoryItem.itemId} item={cartItem.inventoryItem} />))}
  </div>);
};

export default ShoppingCartItems;