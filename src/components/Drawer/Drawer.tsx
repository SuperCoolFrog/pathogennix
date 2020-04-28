import React from 'react';
import classNames from 'classnames';
import styles from './drawer.module.scss';

interface DrawerProps {
  onClose: () => void;
  renderBody: () => React.ReactElement;
  left?: boolean;
}

const Drawer = ({
  onClose,
  renderBody,
  left,
}: DrawerProps) => {

  return (
    <>
    <div className={styles.drawerBackground}
         onClick={onClose}> </div>
    <div className={classNames(styles.drawer, { [styles.left]: left, [styles.right]: !left})}
         role="dialog"
         aria-modal={true}>
      <div className={styles.closeButtonContainer}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
      </div>
      { renderBody() }
    </div>
    </>
  );
};

export default Drawer;
