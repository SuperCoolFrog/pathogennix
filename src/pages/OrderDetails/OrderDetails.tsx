import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from './order-details.module.scss';
import Footer from '../../components/Footer/Footer';
import OrderDetailsCard from '../../components/OrderDetailsCard/OrderDetailsCard';

const PaymentComplete = () => {
  const { orderId } = useParams();
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.orderDetailsContainer}>
        <OrderDetailsCard orderId={orderId} />
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default PaymentComplete;