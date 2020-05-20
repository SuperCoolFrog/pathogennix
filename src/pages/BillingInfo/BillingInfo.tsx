import React, { useEffect } from 'react';
import styles from './billing-info.module.scss';
import Footer from '../../components/Footer/Footer';
import BillingInfoCard from '../../components/BillingInfoCard/BillingInfoCard';
import StripeElementsContainer from '../../components/StripeElementsContainer/StripeElementsContainer';

const BillingInfo = () => {
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.billingInfoContainer}>
        <StripeElementsContainer>
          <BillingInfoCard />
        </StripeElementsContainer>
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default BillingInfo;
