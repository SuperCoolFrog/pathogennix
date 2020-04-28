import { combineReducers } from '@reduxjs/toolkit';
import inventorySlice from './inventory/inventory-slice';
import navigationSlice from './navigation/navigation-slice';

const rootReducer = combineReducers({
  inventory: inventorySlice.reducer,
  navigation: navigationSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
