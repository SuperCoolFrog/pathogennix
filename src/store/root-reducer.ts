import { combineReducers } from '@reduxjs/toolkit';
import inventorySlice from './inventory/inventory-slice';

const rootReducer = combineReducers({
  inventory: inventorySlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
