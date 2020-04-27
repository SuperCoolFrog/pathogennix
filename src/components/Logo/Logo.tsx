import React from 'react';
import styles from './logo.module.scss';

const Logo = () => {
  
  return (<div className={styles.container}>
    <span className={styles.pathogen}>Pathogen</span><span className={styles.nix}>Nix</span>
  </div>);
};

export default Logo;