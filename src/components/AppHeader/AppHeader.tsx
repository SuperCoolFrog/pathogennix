import React from 'react';
import classNames from 'classnames';
import styles from './app-header.module.scss';
import SearchBox from '../SearchBox/SearchBox';
import TopNav from '../TopNav/TopNav';
import Logo from '../Logo/Logo';

const AppHeader = () => {
  return (<section className={classNames("pure-g", styles.appHeader)}>
    <div className={classNames("pure-u-1", styles.container)}>
      <div className="pure-g">
        <div className={"pure-u"}>
          <TopNav segment="" />
        </div>
        <div className={"pure-u-1-4"}>
          <Logo />
        </div>
        <div className={"pure-u-1-2"}>
          <SearchBox />
        </div>
        <div className={"pure-u-1-6"}>
          Cart
        </div>
      </div>
    </div>
  </section>)
};

export default AppHeader;