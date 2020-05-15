import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './search-box.module.scss';
import SearchIcon from '../Icons/SearchIcon';
import history from '../../routes/history';

const SearchBox = () => {
  const [searchString, updateSearchString] = useState("");
  
  const navigateToSearchResults = () => {
      history.push(`/search/${encodeURI(searchString)}`)
  };
  
  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    ev.preventDefault();
    updateSearchString(ev.currentTarget.value);
  };
  
  const handleKeyPressed = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter'){
      ev.preventDefault();
      navigateToSearchResults();
    }
  };
  
  const handleSearchButtonClick = (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    navigateToSearchResults();
  };
  
  return (<div className={classNames("pure-form pure-form-aligned", styles.searchBoxContainer)}>
    <div className={classNames("pure-control-group", styles.searchBoxGroup)}>
      <label htmlFor="product-search" className={styles.searchBoxLabel}>Products</label>
      <input
        id="product-search"
        className={styles.searchBoxInput}
        placeholder="Search"
        value={searchString}
        onChange={handleChange}
        onKeyPress={handleKeyPressed}
      />
      <button className={styles.searchIconButton} onClick={handleSearchButtonClick}>
        <SearchIcon />
      </button>
    </div>
  </div>);
};

export default SearchBox;