import React from 'react';
import classNames from 'classnames';
import styles from './search-box.module.scss';
import SearchIcon from '../Icons/SearchIcon';

const SearchBox = () => {
  return (<div className={classNames("pure-form pure-form-aligned", styles.searchBoxContainer)}>
    <div className={classNames("pure-control-group", styles.searchBoxGroup)}>
      <label htmlFor="product-search" className={styles.searchBoxLabel}>Products</label>
      <input id="product-search" className={styles.searchBoxInput} placeholder="Search" />
      <button className={styles.searchIconButton}>
        <SearchIcon />
      </button>
    </div>
  </div>);
};

export default SearchBox;