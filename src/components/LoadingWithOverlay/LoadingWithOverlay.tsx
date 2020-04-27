import React from 'react';
import Loading from '../Loading/Loading';
import Overlay from '../Overlay/Overlay';
import styles from './loading-with-overlay.module.scss';

interface LoadingWithOverlayProps {
  contained: boolean;
}

const LoadingWithOverlay = ({ contained }: LoadingWithOverlayProps) => {
  return (
    <Overlay contained={contained}>
      <div className={styles.loadingContainer}>
        <Loading></Loading>
      </div>
    </Overlay>
  );
};

export default LoadingWithOverlay;
