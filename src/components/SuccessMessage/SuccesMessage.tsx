import React from 'react';
import styles from './success-message.module.scss';

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage = ({ message }:SuccessMessageProps) => (<p className={styles.successMessage}>
  {message}
</p>);

export default SuccessMessage;