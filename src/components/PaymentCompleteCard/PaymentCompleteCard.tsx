import React from 'react';
import classNames from 'classnames';
import styles from './payment-complete-card.module.scss';
import SuccessMessage from '../SuccessMessage/SuccesMessage';

interface PaymentCompleteCardProps {
  orderId: string;
}

const PaymentCompleteCard = ({ orderId }: PaymentCompleteCardProps) => {
  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    <section>
      <header className={styles.header}>
        <h2>Payment Complete</h2>
      </header>
      <section className={styles.successContainer}>
        <SuccessMessage message={`OrderId: ${orderId}`}/>
      </section>
      <p className={styles.message}>
        Your payment has successfully processed.  Please look for a confirmation email and save/print this page for your records.
      </p>
    </section>
  </section>);
};

export default PaymentCompleteCard;