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

// import { default as FormFields } from '../../models/NewInventoryFormField.enum';
// import HashMap from '../../models/HashMap';
// 
// const inventoryImagePath = 'inventoryImage';
// 
// export const postNewItem = (userId: string, form: HashMap<FormFields, string>, imageFile: File): AppThunk => async(dispatch) => {
//   const {
//     submittingInventoryStarted,
//     submittingInventoryCompleted,
//     submittingInventoryFailed,
//   } = inventorySlice.actions;
// 
//   dispatch(submittingInventoryStarted());
//   
//   try {
//     const imageUrl = await api.storage.createStorageItem(userId, inventoryImagePath, imageFile);
// 
//     await api.inventory.postNewInventory(userId, form, imageUrl);
// 
//     dispatch(submittingInventoryCompleted());
//   } catch(e) {
//     dispatch(submittingInventoryFailed(e.message));
//   }
//   
//   
// };

export default {};