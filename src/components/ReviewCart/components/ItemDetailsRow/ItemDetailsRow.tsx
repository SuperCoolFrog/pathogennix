import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './item-details-row.module.scss';
import ShoppingCartItem from '../../../../models/ShoppingCartItem';

interface ItemDetailsRowProps {
  cartItem: ShoppingCartItem;
}

const ItemDetailsRow = ({ cartItem }: ItemDetailsRowProps) => {
  const item = cartItem.inventoryItem;

  return (<div className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.itemDetailsRowContainer}>
        <div className={classNames("pure-g", styles.detailsCard)}>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-5">
            <div className={styles.imageContainer}>
              <img src={item.imageSrc} className={classNames("pure-img", styles.image)} alt={item?.itemName} />
            </div>
          </div>
          <div className={classNames("pure-u-1 pure-u-md-1-2", styles.rightContainer)}>
            <header className={styles.detailsHeader}>
              {item.itemName}
            </header>
            <section className={styles.subDetailsHeader}>
              <p className={styles.description}>{item.description}</p>
            </section>
            <section className={styles.actionsContainer}>
              <label className={styles.quantityLabel}>
                Quantity
                <input type="number" min="1" className={styles.quantityInput} value={cartItem.quantityToBuy} />
              </label>
              <button className={styles.deleteButton}>delete</button>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div className={classNames("pure-u-1", styles.ruleContainer)}>
      <hr />
    </div>
  </div>);
};

export default ItemDetailsRow;