import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './item-details-row.module.scss';
import ShoppingCartItem from '../../../../models/ShoppingCartItem';
import shoppingCartSlice from '../../../../store/shopping-cart/shopping-cart-slice';

interface ItemDetailsRowProps {
  cartItem: ShoppingCartItem;
}

const ItemDetailsRow = ({ cartItem }: ItemDetailsRowProps) => {
  const dispatch = useDispatch();
  const [quantityInputVal, setQuantityInputVal] = useState(cartItem.quantityToBuy.toString());
  const item = cartItem.inventoryItem;
  const { removeCartItem, updateCartItemQuantity } = shoppingCartSlice.actions;
  
  const handleInputBlur = (ev: React.FormEvent<HTMLInputElement>) => {
    ev.preventDefault();
    
    const updatedCartItem = {
      inventoryItem: cartItem.inventoryItem,
      quantityToBuy: parseInt(quantityInputVal) || 0
    };
    dispatch(updateCartItemQuantity(updatedCartItem));
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setQuantityInputVal(ev.currentTarget.value);
  };

  const handleDeleteClick = (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    dispatch(removeCartItem(cartItem.inventoryItem.itemId));
  };

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
                <input type="number" min="1" className={styles.quantityInput}
                  value={quantityInputVal}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
              </label>
              <button className={styles.deleteButton} onClick={handleDeleteClick}>delete</button>
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