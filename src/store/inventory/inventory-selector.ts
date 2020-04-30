import { RootState } from '../root-reducer';
import { createSelector } from '@reduxjs/toolkit';

export const inventoryStateSelector = (state: RootState) => state.inventory;

export const inventoryItemSelector = (itemId: string) => createSelector(
  inventoryStateSelector,
  (state) => {
    const items = state.inventoryItems;
    return items && items.find(item => item.itemId === itemId);
  });

// 
// export const newInventoryModalIsVisibleSelector = createSelector(
//   inventoryStateSelector,
//   (inventoryState) => inventoryState.newInventoryModalIsVisible,
// );
// 
// export const newInventoryFormSelector = createSelector(
//   inventoryStateSelector,
//   (inventoryState) => ({
//     isValid: inventoryState.newInventoryFormIsValid,
//     fields: inventoryState.newInventoryForm,
//     validationErrors: inventoryState.validationErrors,
//     isSubmitting: inventoryState.isSubmittingNewInventory,
//   }),
// );
// 