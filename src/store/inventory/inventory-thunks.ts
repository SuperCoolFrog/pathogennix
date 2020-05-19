import api from '../../api';
import { AppThunk } from '../index';
import inventorySlice from './inventory-slice';

export const getItems = (): AppThunk => async (dispatch) => {
  const {
    inventoryFetchingFailed,
    inventoryFetchingSucceeded,
   inventoryIsBeingFetched,
  } = inventorySlice.actions;
  
  dispatch(inventoryIsBeingFetched());
  
  try {
    const inventoryItems = await api.inventory.getInventory();
    dispatch(inventoryFetchingSucceeded(inventoryItems));
  } catch(e) {
    dispatch(inventoryFetchingFailed(e.message));
  }
};

export default {
  getItems,
};