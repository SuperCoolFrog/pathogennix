import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './order-search-card.module.scss';
import SearchIcon from '../Icons/SearchIcon';
import history from '../../routes/history';

const PaymentCompleteCard = () => {
  const [inputValue, setInputValue] = useState('');
  
  const navigateToOrderDetails = () => {
    if (inputValue) {
      history.push(`/order/${inputValue}`);
    }
  };
  
  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setInputValue(ev.currentTarget.value);
  };

  const handleKeyPressed = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter'){
      ev.preventDefault();
      navigateToOrderDetails();
    }
  };
  
  const handleClick = (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    navigateToOrderDetails();
  };
  
  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    <section>
      <header className={styles.header}>
        <h2>Order Search</h2>
      </header>
      <p className={styles.message}>
        Use your OrderId to search for your order
      </p>
      <div className={styles.searchOuterContainer}>
        <div className={classNames("pure-form pure-form-aligned", styles.searchBoxContainer)}>
          <div className={classNames("pure-control-group", styles.searchBoxGroup)}>
            <label htmlFor="order-search" className={styles.searchBoxLabel}>OrderId</label>
            <input
              id="order-search"
              className={styles.searchBoxInput}
              placeholder="Enter an OrderId"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPressed}
            />
            <button className={styles.searchIconButton} onClick={handleClick}>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>);
};

export default PaymentCompleteCard;