// import api from '../../api';
// import { AppThunk } from '../index';
// import inventorySlice from './inventory-slice';
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