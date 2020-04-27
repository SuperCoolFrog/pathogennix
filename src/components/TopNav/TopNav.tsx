import React, { useState } from 'react';
import classNames from 'classnames';
import Nav from '../Nav/Nav';
import styles from './top-nav.module.scss';
import BarsIcon from '../Icons/BarsIcon';

interface TopNavProps {
  segment: string;
}

const TopNav = ({ segment }: TopNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.toggleButtonContainer}>
      <button className={classNames(
          styles.toggleButton,
        )}
        onClick={handleToggleClick}
      >
        <BarsIcon />
      </button>
    </div>
  );
};

export default TopNav;
