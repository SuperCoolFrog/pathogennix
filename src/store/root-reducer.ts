import { combineReducers } from '@reduxjs/toolkit';
import inventorySlice from './inventory/inventory-slice';
import navigationSlice from './navigation/navigation-slice';
import shoppingCartSlice from './shopping-cart/shopping-cart-slice';
import paymentProcessingSlice from './payment-processing/payment-processing-slice';
import configSlice from './config/config-slice';

const rootReducer = combineReducers({
  inventory: inventorySlice.reducer,
  navigation: navigationSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  paymentProcessing: paymentProcessingSlice.reducer,
  config: configSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
