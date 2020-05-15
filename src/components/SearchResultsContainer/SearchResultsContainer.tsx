import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useParams } from "react-router-dom";
import styles from './search-results-container.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { inventoryStateSelector } from '../../store/inventory/inventory-selector';
import { getItems } from '../../store/inventory/inventory-thunks';
import LoadingWithOverlay from '../LoadingWithOverlay/LoadingWithOverlay';
import InventoryItem from '../../models/InventoryItem';
import ListItem from './components/SearchResultListItem/SearchResultListItem';

const SearchResultsContainer = () => {
  const { searchString } = useParams();
  const dispatch = useDispatch();
  const {
    hasFetchedInventory,
    inventoryItems,
    isLoadingInventory,
  } = useSelector(inventoryStateSelector);
  
  useEffect(() => {
    if (!(isLoadingInventory || hasFetchedInventory)) {
      dispatch(getItems());
    }
  }, []); 
  
  let filteredItems: InventoryItem[] = [];

  if (hasFetchedInventory) {
    const searchStringCaps = searchString.toUpperCase();
    inventoryItems.forEach(item => {
      const stringVals = `${item.itemName.toUpperCase()}${item.category.toUpperCase()}`
      const idVals = `${item.itemId}${item.SKU}`;
      if (stringVals.indexOf(searchStringCaps) > -1 || idVals.indexOf(searchString) > -1) {
        filteredItems.push(item);    
      }
    });   
  }

  return (<section className={classNames("pure-u-1", styles.searchResultsContainer)}>
    <section>
      <header className={styles.header}>
        <h2>Search Results</h2>
      </header>
    </section>
    <div className={"pure-g"}>
      <div className={"pure-u-1"}>
        <div className={styles.contentContainer}>
          {hasFetchedInventory && filteredItems.map(item => (<ListItem item={item} key={item.itemId} />))}
          {isLoadingInventory && <LoadingWithOverlay contained />}
        </div>
      </div>
    </div>
  </section>)
};

export default SearchResultsContainer;