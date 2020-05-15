import React from 'react';
import styles from './shopping-cart-items.module.scss';
import InventoryItem from '../../../../models/InventoryItem';
import CartListItem from '../CartItemListItem/CartItemListItem';

const demoItems: InventoryItem[] = [
];

interface ShoppingCartItemsProps {
  items?: InventoryItem[];
}

const ShoppingCartItems = ({ items = demoItems }: ShoppingCartItemsProps) => {
  return (<div className={styles.container}>
    {!(items && items.length) && <p className={styles.noItemsText}>No items in your cart</p>}
    {items && items.map(item => (<CartListItem key={item.itemId} item={item} />))}
  </div>);
};

export default ShoppingCartItems;