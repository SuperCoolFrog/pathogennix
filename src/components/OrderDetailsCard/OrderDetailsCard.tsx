import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './order-details-card.module.scss';
import ordersSlice from '../../store/orders/orders-slice';
import { fetchOrderDetails } from '../../store/orders/orders-thunks';
import { ordersStateSelector }from '../../store/orders/orders-selector';

interface OrderDetailsCardProps {
  orderId: string;
}

const OrderDetailsCard = ({ orderId }: OrderDetailsCardProps) => {
  const {
    isProcessing,
    orderDetails,
    processingError,
    hasRequestedOrderDetails,
  } = useSelector(ordersStateSelector);
  const dispatch = useDispatch();
  const { clearOrderDetails } = ordersSlice.actions;
  
  useEffect(() => {
    if (!(isProcessing || hasRequestedOrderDetails)) {
      dispatch(fetchOrderDetails(orderId));
    }
    
    return () => { dispatch(clearOrderDetails()); }
  }, [orderId]);
  
  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    <section className={styles.headerSection}>
      <header className={styles.header}>
        <h2>Order Search: {orderId}</h2>
      </header>
    </section>
    <section className={styles.cardContentSection}>
      {isProcessing && <div> Looking up the details for your order. </div>}
      {(hasRequestedOrderDetails && !orderDetails.orderExists) && <div>Could not find order matching that Id</div>}
      {(hasRequestedOrderDetails && orderDetails.orderExists) && <div>OrderState {orderDetails.orderState}</div>}
    </section>
  </section>);
};

export default OrderDetailsCard;