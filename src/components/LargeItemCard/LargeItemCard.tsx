import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './large-item-card.module.scss';
import Loading from '../LoadingEllipsis/LoadingEllipsis';
import InventoryItem from '../../models/InventoryItem';
import shoppingCartSlice from '../../store/shopping-cart/shopping-cart-slice';
import ShoppingCartItem from '../../models/ShoppingCartItem';
import { asPriceString } from '../../helpers/helpers';

interface LargeItemCardProps {
  item: InventoryItem;
  isLoading: boolean;
}

const LargeItemCard = ({ item }: LargeItemCardProps) => {
  const [displayLoading, setDisplayLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    addCartItemQuantity,
  } = shoppingCartSlice.actions;
  
  const handleClick = (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const shoppingCartItem: ShoppingCartItem = {
      inventoryItem: item,
      quantityToBuy: 1,
    };
    setDisplayLoading(true);

    dispatch(addCartItemQuantity(shoppingCartItem));

    setTimeout(() => {
      setDisplayLoading(false);
    }, 300);
  }; 
  
  const soldOut = item.quantity < 1;
  
  
  return (<div className={styles.cardContainer}>
    <div className={styles.imageContainer}>
      <Link to={`/details/${item.itemId}`}>
        <img src={item.imageSrc} className={styles.image} />
      </Link>
    </div>
    <div className={styles.name}>
      <Link to={`/details/${item.itemId}`}>
        {item.itemName} {soldOut && (<span className={styles.soldOut}>(Sold Out)</span>)}
      </Link>
    </div>
    <div className={styles.price}>
      ${asPriceString(item.price)}
    </div>
    <div className={styles.addToCartContainer}>
      {
        displayLoading
        ? (<Loading />)
        : (<button disabled={soldOut} className={classNames("pure-button", styles.addToCartButton)} onClick={handleClick}>Add to Cart</button>)
      }
    </div>
  </div>);
};

export default LargeItemCard;
