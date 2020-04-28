import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './top-nav.module.scss';
import BarsIcon from '../Icons/BarsIcon';
import navigationSlice from '../../store/navigation/navigation-slice';

interface TopNavProps {
  segment: string;
}

const TopNav = ({ segment }: TopNavProps) => {
  const dispatch = useDispatch();
  
  const { openDrawer } = navigationSlice.actions;
  
  const handleToggleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    dispatch(openDrawer());
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
