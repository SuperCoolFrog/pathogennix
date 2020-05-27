import React from 'react';
import styles from './item-list.module.scss';
import InventoryItem from '../../models/InventoryItem';
import Card from './components/ItemListCard/ItemListCard';
import Loading from '../Loading/Loading';

interface ItemListProps {
  header: string;
  items?: InventoryItem[];
  isLoading: boolean;
}

const ItemList = ({ header, items, isLoading }: ItemListProps) => {
  return (<>
    <div className={styles.header}>{header}</div>
    <div className={styles.itemListContainer}>
      <div className={styles.itemsContainer}>
        { isLoading && <Loading />}
        { items && !!items.length && items.map((item) => (
          <Card item={item} key={item.itemId} />
        ))}
      </div>
    </div>
  </>);
};

export default ItemList;