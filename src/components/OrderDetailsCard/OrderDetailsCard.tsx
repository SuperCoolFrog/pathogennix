import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './order-details-card.module.scss';
import ordersSlice from '../../store/orders/orders-slice';
import { fetchOrderDetails } from '../../store/orders/orders-thunks';
import { ordersStateSelector }from '../../store/orders/orders-selector';
import Loading from '../Loading/Loading';
import WarningIcon from '../Icons/WarningIcon';

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
        <h1>Details for Order: <span className={styles.orderId}>{orderId}</span></h1>
      </header>
    </section>
    <section className={styles.cardContentSection}>
      {isProcessing && (<div className={styles.loadingContainer}>
        <h2 className={styles.loadingMessage}>Looking for your order</h2>
        <Loading />
      </div>)}
      {(hasRequestedOrderDetails && !orderDetails.orderExists) && (<div className={styles.orderNotFoundContainer}>
        <span className={styles.warningIconContainer}><WarningIcon /></span>
        <p>Could not find order matching that orderId.  Please confirm your orderId and try again.</p>
      </div>)}
      {(hasRequestedOrderDetails && orderDetails.orderExists) && <div>OrderState {orderDetails.orderState}</div>}
    </section>
  </section>);
};

export default OrderDetailsCard;