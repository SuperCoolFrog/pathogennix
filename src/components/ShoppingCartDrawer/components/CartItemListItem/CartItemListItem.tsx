import React from 'react';
import classNames from 'classnames';
import styles from './cart-item-list-item.module.scss';
import InventoryItem from '../../../../models/InventoryItem';

interface CartItemListItemProps {
  item: InventoryItem;
}

const CartItemListItem = ({ item }: CartItemListItemProps) => {
  return (<div className={classNames("pure-g", styles.container)}>
    <div className={classNames("pure-u-1 pure-u-md-1-2", styles.imageContainerContainer)}>
      <div className={styles.imageContainer}>
        <img alt={item.itemName} src={item.imageSrc || "/mask.placeholder.png"} className="pure-img" />
      </div>
    </div>
    <div className={classNames("pure-u-1 pure-u-md-1-2", styles.priceContainer)}>
      <span className={styles.price}>
        ${item.price}
      </span>
      <span className={classNames(styles.itemName, styles.details)}>{item.itemName}</span>
    </div>
    <div className={classNames("pure-u-1", styles.detailsContainer, styles.details)}>
      <div className={styles.quantity}>
        <button className={styles.minusButton}>-</button>
        <input type="number" min="1" className={styles.quantityInput} />
        <button className={styles.plusButton}>+</button>
      </div>
      <div className={styles.delete}>
        <button className={styles.deleteButton}>delete</button>
      </div>
    </div>
  </div>);
};

export default CartItemListItem;
