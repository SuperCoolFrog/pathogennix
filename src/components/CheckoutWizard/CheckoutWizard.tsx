import React from 'react';
import classNames from 'classnames';
import styles from './checkout-wizard.module.scss';
import ReviewCart from './components/ReviewCart/ReviewCart';

const CheckoutWizard = () => {
  return (<section className={classNames("pure-u-1", styles.checkoutWizardContainer)}>
    <div className={styles.wizardStepsContainer}>
      <ReviewCart isActive={true} onNextClick={() => {}} onPrevClick={() => {}} />
    </div>
  </section>);
}

export default CheckoutWizard