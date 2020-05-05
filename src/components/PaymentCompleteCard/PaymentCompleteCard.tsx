import React from 'react';
import classNames from 'classnames';
import styles from './payment-complete-card.module.scss';

const PaymentCompleteCard = () => {
  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    <section>
      <header className={styles.header}>
        <h2>Payment Complete</h2>
      </header>
      <h3 className={styles.successHeader}>Success!</h3>
      <p className={styles.message}>
        Your payment has successfully processed.  Please look for a confirmation email and save/print this page for your records.
      </p>
      <div className={styles.orderReview}>
         REVIEW
      </div>
    </section>
  </section>);
};

export default PaymentCompleteCard;