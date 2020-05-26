import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useHistory, useLocation } from "react-router-dom";
import styles from './nav.module.scss';
import navigationSlice from '../../store/navigation/navigation-slice';

interface NavProps {
  children?: React.ReactNode;
}

const HIDDEN_NAV_PATHNAMES = ['/sign-in', '/sign-up'];

const Nav = ({
  children,
}: NavProps) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { closeDrawer } = navigationSlice.actions;
  
  const showLinks = !(HIDDEN_NAV_PATHNAMES.indexOf(location.pathname) > -1);

  const navigateTo = (path: string) => (ev: React.FormEvent) => {
    history.push(path);
    dispatch(closeDrawer());
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
            <li onClick={navigateTo('/order')} className={classNames({ [styles.selected]: isSegment('/order')})}>
              Track Order
            </li>
            <li onClick={navigateTo('/about')} className={classNames({ [styles.selected]: isSegment('/about')})}>
              About
            </li>
            <li onClick={navigateTo('/contact')} className={classNames({ [styles.selected]: isSegment('/contact')})}>
              Contact Us 
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
};

export default Nav;

