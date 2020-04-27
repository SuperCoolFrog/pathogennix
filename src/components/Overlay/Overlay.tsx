import React from 'react';
import classNames from 'classnames';
import styles from './overlay.module.scss';

interface OverlayProps {
  contained: boolean;
  children: React.ReactNode;
}

const Overlay = ({ children, contained }: OverlayProps) => {

  return (<>
    <div className={
      classNames(styles.overlayBackground, { [styles.contained]: contained })}
    ></div>
    <div className={styles.overlayContainer}>
      {children}
    </div>
  </>);
};

export default Overlay;
