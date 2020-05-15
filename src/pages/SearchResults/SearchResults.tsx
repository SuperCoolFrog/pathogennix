import React from 'react';
import styles from './search-results.module.scss';
import Footer from '../../components/Footer/Footer';
import SearchResultsContainer from '../../components/SearchResultsContainer/SearchResultsContainer';

const SearchResults = () => {
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.searchResultsContainer}>
        <SearchResultsContainer />
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default SearchResults;