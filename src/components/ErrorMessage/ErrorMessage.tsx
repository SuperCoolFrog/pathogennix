import React from 'react';
import styles from './error-message.module.scss';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }:ErrorMessageProps) => (<p className={styles.errorMessage}>
  {message}
</p>);

export default ErrorMessage;