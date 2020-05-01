import React, { useEffect } from 'react';
import styles from './checkout.module.scss';
import Footer from '../../components/Footer/Footer';
import CheckoutWizard from '../../components/CheckoutWizard/CheckoutWizard';

const Home = () => {
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.checkoutContainer}>
        <CheckoutWizard />
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default Home;
