import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './footer.module.scss';

const Footer = () => {
  const backToTopFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (<footer className={styles.footerContainer}>
    <button className={styles.backToTopButton}
      onClick={backToTopFunction}
    >Back to Top</button>
    <div className={classNames("pure-g", styles.footerContent)}>
      <div className={classNames("pure-u-1-3", styles.footerContentColumn)}>
        <header>See our Products</header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/order">Track Order</Link></li>
        </ul>
      </div>
      <div className={classNames("pure-u-1-3", styles.footerContentColumn)}>
        <header>About Us</header>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><a href="https://smountaintech.com" target="_blank">South Mountain Technology llc</a></li>
        </ul>
      </div>
    </div>
  </footer>);
};

export default Footer;