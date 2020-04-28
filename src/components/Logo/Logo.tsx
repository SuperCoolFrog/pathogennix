import React from 'react';
import classNames from 'classnames';
import styles from './logo.module.scss';
import history from '../../routes/history';

interface LogoProps {
  style2?: boolean;
}

const Logo = ({ style2 }: LogoProps) => {
  
  const handleClick = () => {
    history.push('/');
    return false;
  };
  
  return (<div className={classNames(styles.container, { [styles.style2]: style2})} onClick={handleClick}>
    <span className={styles.pathogen}>Pathogen</span><span className={styles.nix}>Nix</span>
  </div>);
};

export default Logo;