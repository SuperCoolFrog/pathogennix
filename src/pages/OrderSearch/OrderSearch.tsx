import React, { useEffect } from 'react';
import styles from './order-search.module.scss';
import Footer from '../../components/Footer/Footer';
import OrderSearchCard from '../../components/OrderSearchCard/OrderSearchCard';

const PaymentComplete = () => {
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.paymentCompleteContainer}>
        <OrderSearchCard />
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default PaymentComplete;