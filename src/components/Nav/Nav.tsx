import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import styles from './nav.module.scss';

interface NavProps {
  children?: React.ReactNode;
  segment: string; // route?
}

const HIDDEN_NAV_PATHNAMES = ['/sign-in', '/sign-up'];

const Nav = ({
  children,
}: NavProps) => {
  const history = useHistory();
  const location = useLocation();

  const showLinks = !(HIDDEN_NAV_PATHNAMES.indexOf(location.pathname) > -1);

  const navigateTo = (path: string) => (ev: React.FormEvent) => {
    history.push(path);
  };

  return (
    <section className={styles.navSectionContainer}>
      {children}
      {showLinks && (
        <nav className={styles.navSection}>
          <ul className={styles.navList}>
            <li onClick={navigateTo('/')}>
              Home
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
};

export default Nav;

