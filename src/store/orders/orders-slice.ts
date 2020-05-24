import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import OrderDetails from '../../models/OrderDetails';

export interface OrdersState {
  isProcessing: boolean;
  orderDetails: OrderDetails;
  processingError: string;
  hasRequestedOrderDetails: boolean;
}

const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState: {
    isProcessing: false,
    hasRequestedOrderDetails: false,
  } as OrdersState,
  reducers: {
    orderDetailsRequested(state) {
      state.isProcessing = true;
      state.hasRequestedOrderDetails = false;
    },
    orderDetailsRequestSucceeded(state, action: PayloadAction<OrderDetails>) {
      state.isProcessing = false;
      state.orderDetails = action.payload;
      state.hasRequestedOrderDetails = true;
    },
    orderDetailsRequestFailed(state, action: PayloadAction<string>) {
      state.isProcessing = false;
      state.processingError = action.payload;
      state.hasRequestedOrderDetails = true;
    },
    clearOrderDetails(state) {
      state.isProcessing = false;
      state.hasRequestedOrderDetails = false;
      delete state.processingError;
      delete state.orderDetails;
    }
  }
});

export default ordersSlice;
