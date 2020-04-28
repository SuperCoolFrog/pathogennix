import React from 'react';
import classNames from 'classnames';
import AppHeader from '../../components/AppHeader/AppHeader';
import Nav from '../../components/Nav/Nav';
import TopNav from '../../components/TopNav/TopNav';
import styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <main className={classNames("pure-g", styles.main)}>
    <section className="pure-u-1">
      <AppHeader />
    </section>
    <section className={classNames("pure-u-1", styles.contentContainer)}>
      {children}
    </section>
  </main>
);

export default Layout;
