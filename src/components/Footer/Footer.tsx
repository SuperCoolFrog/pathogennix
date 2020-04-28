import React from 'react';
import classNames from 'classnames';
import styles from './footer.module.scss';

const Footer = () => {
  return (<footer className={styles.footerContainer}>
    <button className={styles.backToTopButton}>Back to Top</button>
    <div className={classNames("pure-g", styles.footerContent)}>
      <div className={classNames("pure-u-1-3", styles.footerContentColumn)}>
        <header>See our Products</header>
        <ul>
          <li>Home</li>
          <li>Masks</li>
          <li>Sanitizer</li>
        </ul>
      </div>
      <div className={classNames("pure-u-1-3", styles.footerContentColumn)}>
        <header>About Us</header>
        <ul>
          <li>About</li>
          <li>South Mountain Technology llc</li>
        </ul>
      </div>
    </div>
  </footer>);
};

export default Footer;