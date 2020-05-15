import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './item-list-card.module.scss';
import InventoryItem from '../../../../models/InventoryItem';
import { asPriceString } from '../../../../helpers/helpers';

interface ItemListCardProps {
  item: InventoryItem;
}

const ItemListCard = ({ item }: ItemListCardProps) => {
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
      <button className={classNames("pure-button", styles.addToCartButton)}>Add to Cart</button>
    </div>
  </div>);
};

export default ItemListCard;