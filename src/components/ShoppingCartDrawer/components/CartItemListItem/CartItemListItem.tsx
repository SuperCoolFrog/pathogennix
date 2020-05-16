import React from 'react';
import classNames from 'classnames';
import styles from './cart-item-list-item.module.scss';
import ShoppingCartItem from '../../../../models/ShoppingCartItem';
import { asPriceString } from '../../../../helpers/helpers';

interface CartItemListItemProps {
  cartItem: ShoppingCartItem;
}

const CartItemListItem = ({ cartItem }: CartItemListItemProps) => {
  const item = cartItem.inventoryItem; 
  const totalPrice = asPriceString(item.price * cartItem.quantityToBuy);

  return (<div className={classNames("pure-g", styles.container)}>
    <div className={classNames("pure-u-1 pure-u-md-1-2", styles.imageContainerContainer)}>
      <div className={styles.imageContainer}>
        <img alt={item.itemName}
          src={item.imageSrc}
          className={classNames("pure-img", styles.image)}
        />
      </div>
    </div>
    <div className={classNames("pure-u-1 pure-u-md-1-2", styles.priceContainer)}>
      <div>
        <span className={styles.price}>
          ${totalPrice}
        </span>
        <span className={styles.priceQuantity}>(x{cartItem.quantityToBuy})</span>
      </div>
      <span className={classNames(styles.itemName, styles.details)}>{item.itemName}</span>
    </div>
    <div className={classNames("pure-u-1", styles.detailsContainer, styles.details)}>
      <div className={styles.quantity}>
        <button className={styles.minusButton}>-</button>
        <input min="1" className={styles.quantityInput} />
        <button className={styles.plusButton}>+</button>
      </div>
      <div className={styles.delete}>
        <button className={styles.deleteButton}>delete</button>
      </div>
    </div>
  </div>);
};

export default CartItemListItem;
