import React from 'react';
import classNames from 'classnames';
import { useHistory, useLocation } from "react-router-dom";
import styles from './nav.module.scss';

interface NavProps {
  children?: React.ReactNode;
}

const HIDDEN_NAV_PATHNAMES = ['/sign-in', '/sign-up'];

const Nav = ({
  children,
}: NavProps) => {
  const history = useHistory();
  const location = useLocation();
  
  console.log('LOCATION', location);

  const showLinks = !(HIDDEN_NAV_PATHNAMES.indexOf(location.pathname) > -1);

  const navigateTo = (path: string) => (ev: React.FormEvent) => {
    history.push(path);
  };
  
  const isSegment = (segment: string) => {
    return location.pathname === segment;
  };

  return (
    <section className={styles.navSectionContainer}>
      {children}
      {showLinks && (
        <nav className={styles.navSection}>
          <ul className={styles.navList}>
            <li onClick={navigateTo('/')} className={classNames({ [styles.selected]: isSegment('/')})}>
              Home
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
};

export default Nav;

