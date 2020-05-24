import React from 'react';
import classNames from 'classnames';
import styles from './order-details-content.module.scss';
import OrderDetails from '../../../../models/OrderDetails';
import OrderState from '../../../../models/OrderState.enum';

interface OrderDetailsContentProps {
  orderDetails: OrderDetails;
}

const MESSAGES = {
  [OrderState.OrderReceived]: "Order has been received and is in the queue to be processed.",
  [OrderState.OrderProcessing]: "We are working on your order.",
  [OrderState.OrderShipmentSent]: "Your order has been shipped.",
  [OrderState.OrderShipmentComplete]: "Order Complete",
};

const DETAILS = {
  [OrderState.OrderReceived]: "We are working our way to your order and will be processed shortly. We will email you when your order is being processed.",
  [OrderState.OrderProcessing]: "Your order is being worked on and should be shipping within a business day.  Continue checking your email for status changes.",
  [OrderState.OrderShipmentSent]: "We have completed processing your order and it is currently on its way to you.  We will email you when we receive notification that is has been delivered",
  [OrderState.OrderShipmentComplete]: "Your order has been successfully delivered.  Please feel free to contact us with any issue you may have had with your order.",
};

const OrderDetailsContent = ({ orderDetails }: OrderDetailsContentProps) => {
  const message = MESSAGES[orderDetails.orderState || OrderState.OrderReceived];
  const details = DETAILS[orderDetails.orderState || OrderState.OrderReceived];

  return (<section className={styles.sectionContainer}>
    <p className={styles.stateMessage}>
      {message}
    </p>
    <p className={styles.stateDetails}>
      {details}
    </p>
    {orderDetails?.publicNotes && (
      <div className={styles.notesContainer}>
        <h3>Notes from vendor:</h3>   
        <p className={styles.publicNotes}>{orderDetails.publicNotes}</p>
      </div>
    )}
  </section>);
};

export default OrderDetailsContent;