import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './cart-item-list-item.module.scss';
import ShoppingCartItem from '../../../../models/ShoppingCartItem';
import { asPriceString } from '../../../../helpers/helpers';
import shoppingCartSlice from '../../../../store/shopping-cart/shopping-cart-slice';

interface CartItemListItemProps {
  cartItem: ShoppingCartItem;
}

const CartItemListItem = ({ cartItem }: CartItemListItemProps) => {
  const item = cartItem.inventoryItem; 
  const totalPrice = asPriceString(item.price * cartItem.quantityToBuy);
  const dispatch = useDispatch();
  const { removeCartItem, updateCartItemQuantity } = shoppingCartSlice.actions;
  
  const handleDeleteClick = (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    dispatch(removeCartItem(cartItem.inventoryItem.itemId));
  };
  
  const handleUpdateQuantity = (modifier: number) => (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    let quantityToBuy = cartItem.quantityToBuy + modifier;

    const updatedItem = {
      inventoryItem: cartItem.inventoryItem,
      quantityToBuy,
    };
    
    dispatch(updateCartItemQuantity(updatedItem))
  };

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
        <button className={styles.minusButton} onClick={handleUpdateQuantity(-1)}>-</button>
        <input min="1" className={styles.quantityInput} value={cartItem.quantityToBuy} />
        <button className={styles.plusButton} onClick={handleUpdateQuantity(1)}>+</button>
      </div>
      <div className={styles.delete}>
        <button className={styles.deleteButton} onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  </div>);
};

export default CartItemListItem;
