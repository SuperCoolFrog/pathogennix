import React from 'react';
import styles from './modal.module.css';

interface ModalProps {
  onClose: () => void;
  renderHeader: () => React.ReactElement;
  renderBody: () => React.ReactElement;
  renderActions?: () => React.ReactElement;
}

const Modal = ({
  onClose,
  renderHeader,
  renderBody,
  renderActions,
}: ModalProps) => {

  const ActionsSection = () => (
    <>
      <hr />
      <section id="actions-section">
        {renderActions && renderActions()}
      </section >
    </>
  );

  return (
    <>
    <div className={styles.modalBackground}
         onClick={onClose}> </div>
    <div className={styles.modal}
         role="dialog"
         aria-modal={true}>
      { renderHeader() }
      <hr />
      { renderBody() }
      { renderActions && <ActionsSection />}
    </div>
    </>
  );
};

export default Modal;
