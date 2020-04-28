import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (<footer className={styles.footerContainer}>
    <button className={styles.backToTopButton}>Back to Top</button>
    Hello World
  </footer>);
};

export default Footer;