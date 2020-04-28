import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inventoryStateSelector } from '../../store/inventory/inventory-selector';
import { getItems } from '../../store/inventory/inventory-thunks';
import ItemList from '../../components/ItemList/ItemList';


const Home = () => {
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

  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <ItemList header="Popular Items" items={inventoryItems} />
    </div>
    <div className={"pure-u-1"}>22222222222222222222</div>
    <div className={"pure-u-1"}>33333333333333333333</div>
  </section>);
};

export default Home;