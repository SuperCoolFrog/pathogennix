import React from 'react';
import styles from './item-list.module.scss';
import InventoryItem from '../../models/InventoryItem';

interface ItemListProps {
  header: string;
  items?: InventoryItem[];
}

const ItemList = ({ header, items }: ItemListProps) => {
  return (<div className={styles.itemListContainer}>
    <div className={styles.header}>{header}</div>
    <div className={styles.itemsContainer}>
      { items && items.length && items.map(() => (<div>Item Card</div>))}
    </div>
  </div>);
};

export default ItemList;