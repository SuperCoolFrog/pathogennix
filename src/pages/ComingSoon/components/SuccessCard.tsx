import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../contact-us.module.scss';
import Footer from '../../../components/Footer/Footer';
import SuccessMessage from '../../../components/SuccessMessage/SuccesMessage';

const SuccessCard = () => {
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.contactUsContainer}>
        <section className={classNames(styles.cardContainer)}>
          <header className={classNames("pure-u-1", styles.header)}>
            <h1>Contact Us</h1>
          </header>
          <SuccessMessage message="Your message has been sent.  You will receive an email with a response and next steps." />
        </section>
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default SuccessCard;