import React, { useEffect } from 'react';
import styles from './checkout.module.scss';
import Footer from '../../components/Footer/Footer';
import ReviewCart from '../../components/ReviewCart/ReviewCart';

const Checkout = () => {
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.checkoutContainer}>
        <ReviewCart />
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default Checkout;
