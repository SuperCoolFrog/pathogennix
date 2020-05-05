import React from 'react';
import classNames from 'classnames';
import styles from './billing-info-card.module.scss';
import PaymentForm from '../../components/PaymentForm/PaymentForm';

const ReviewCart = () => {
  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    <section>
      <header className={styles.header}>
        <h2>Billing Info</h2>
      </header>
    </section>
    <div className={"pure-g"}>
      <div className={"pure-u-2-3"}>
        <div className={styles.contentContainer}>
          <PaymentForm />
        </div>
      </div>
    </div>
  </section>)
};

export default ReviewCart;