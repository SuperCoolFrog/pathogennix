import React from 'react';
import styles from './item-list-card.module.scss';

const ItemListCard = () => {
  return (<div className={styles.cardContainer}>
    <div className={styles.imageContainer}>
      <img src="/mask.placeholder.png" className={styles.image} />
    </div>
    <div className={styles.name}>
      <a href="/">Name</a>
    </div>
    <div className={styles.price}>
      $1.00
    </div>
  </div>);
};

export default ItemListCard;