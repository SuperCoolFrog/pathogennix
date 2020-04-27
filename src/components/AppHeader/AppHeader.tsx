import React from 'react';
import classNames from 'classnames';
import styles from './app-header.module.scss';

const AppHeader = () => {
  return (<section className={classNames("pure-g", styles.appHeader)}>
    <div className={classNames("pure-u-1", styles.container)}>
      <div className="pure-g">
        <div className={"pure-u-1-12"}>NavBtn</div>
        <div className={"pure-u-1-4"}>Logo</div>
        <div className={"pure-u-1-2"}>
          Search Bar
        </div>
        <div className={"pure-u-1-6"}>
          Cart
        </div>
      </div>
    </div>
  </section>)
};

export default AppHeader;