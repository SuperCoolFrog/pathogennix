import React from 'react';
import classNames from 'classnames';
import styles from './about-header.module.scss';

const AboutHeader = () => {
  return (
    <header className={styles.header}>
      <h1>
        About&nbsp;
        <span className={styles.pathongenText}>Pathongen</span>
        <span className={styles.nixText}>Nix</span>
      </h1>
    </header>
  );
}

export default AboutHeader;