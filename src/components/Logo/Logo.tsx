import React from 'react';
import styles from './logo.module.scss';
import history from '../../routes/history';

const Logo = () => {
  
  const handleClick = () => {
    history.push('/');
    return false;
  };
  
  return (<div className={styles.container} onClick={handleClick}>
    <span className={styles.pathogen}>Pathogen</span><span className={styles.nix}>Nix</span>
  </div>);
};

export default Logo;