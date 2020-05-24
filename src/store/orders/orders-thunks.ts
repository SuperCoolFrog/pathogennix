import api from '../../api';
import { AppThunk } from '../index';
import ordersSlice from './orders-slice';

export const fetchOrderDetails= (
  orderId: string
): AppThunk => async (dispatch) => {
  const {
    orderDetailsRequested,
    orderDetailsRequestSucceeded,
    orderDetailsRequestFailed,
  } = ordersSlice.actions;
  
  dispatch(orderDetailsRequested());
  
  try {
    const orderDetails = await api.orders.getOrderDetails(orderId);
    dispatch(orderDetailsRequestSucceeded(orderDetails));
  } catch(e) {
    dispatch(orderDetailsRequestFailed(e.message));
  }
};