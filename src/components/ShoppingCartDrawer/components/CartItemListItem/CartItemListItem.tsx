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
        {item.price}
      </span>$
    </div>
  </div>);
};

export default CartItemListItem;