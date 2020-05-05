import React, { useEffect } from 'react';
import styles from './payment-complete.module.scss';
import PaymentCompleteCard from '../../components/PaymentCompleteCard/PaymentCompleteCard';
import Footer from '../../components/Footer/Footer';

const PaymentComplete = () => {
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.paymentCompleteContainer}>
        <PaymentCompleteCard />
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default PaymentComplete;