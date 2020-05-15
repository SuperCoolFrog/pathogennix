import React from 'react';
import styles from './loading-ellipsis.module.scss';

// Thanks https://loading.io/css/
const Loading = () => (
  <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
);

export default Loading;
