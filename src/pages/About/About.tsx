import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './about.module.scss';
import Footer from '../../components/Footer/Footer';
import AboutHeader from '../../components/AboutHeader/AboutHeader';
import FancyQuote from '../../components/FancyQuote/FancyQuote';

const About = () => {
  const quoteText = 'My goal is to provide a convenient and affordable place to buy the necessary gear needed to support a safer work environment.';

  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.aboutContainer}>
        <section className={classNames("pure-u-1", styles.cardContainer)}>
          <section>
            <AboutHeader />
          </section>
          <section className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img src="/images/protection.jpg" className={styles.image} />
            </div>
          </section>
          <section className={styles.contentSection}>
            <header className={styles.contentHeader}>
              <h2>
                <span className={styles.emph}>Easy Access,&nbsp;</span>
                <span className={styles.highlightRed}>No</span>
                &nbsp;Price Gouging!
              </h2>
            </header>
            <section className={styles.contentText}>
              <p>
                As a person who knows a lot of small business owners and as an owner myself, I know the importance of 
                being able to open up shop.  After looking online at the usual places I purchase materials, I noticed that there
                was a lot of price gouging and that there was very little regulations protecting customers. In order to protect oneself
                and their employees, employers had only a couple of options.  They could either pay the marked up price for the protective gear,
                or spend countless hours searching and maybe with a lot of luck be able to find the things they need at a fair price.  And to make matters worse,
                protective gear does not last forever so the employer would need to do it again within a few weeks.
              </p>
            </section>
            <section className={styles.contentQuote}>
              <FancyQuote quoteText={quoteText} quoteAuthor="Michael Vasquez - PathogenNix Creator" />
            </section>
          </section>
        </section>
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default About;