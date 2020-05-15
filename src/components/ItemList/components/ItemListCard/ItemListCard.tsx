import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './item-list-card.module.scss';
import InventoryItem from '../../../../models/InventoryItem';
import { asPriceString } from '../../../../helpers/helpers';
import shoppingCartSlice from '../../../../store/shopping-cart/shopping-cart-slice';
import ShoppingCartItem from '../../../../models/ShoppingCartItem';
import Loading from '../../../LoadingEllipsis/LoadingEllipsis';

interface ItemListCardProps {
  item: InventoryItem;
}

const ItemListCard = ({ item }: ItemListCardProps) => {
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
  
  
  return (<div className={styles.cardContainer}>
    <div className={styles.imageContainer}>
      <Link to={`/details/${item.itemId}`}>
        <img src={item.imageSrc} className={styles.image} />
      </Link>
    </div>
    <div className={styles.name}>
      <Link to={`/details/${item.itemId}`}>
        {item.itemName}
      </Link>
    </div>
    <div className={styles.price}>
      ${asPriceString(item.price)}
    </div>
    <div className={styles.addToCartContainer}>
      {
        displayLoading
        ? (<Loading />)
        : (<button className={classNames("pure-button", styles.addToCartButton)} onClick={handleClick}>Add to Cart</button>)
      }
    </div>
  </div>);
};

export default ItemListCard;