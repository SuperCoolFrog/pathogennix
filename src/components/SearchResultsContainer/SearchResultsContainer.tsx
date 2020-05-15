import React from 'react';
import classNames from 'classnames';
import { useParams } from "react-router-dom";
import styles from './search-results-container.module.scss';

const SearchResultsContainer = () => {
  const { searchString } = useParams();

  return (<section className={classNames("pure-u-1", styles.searchResultsContainer)}>
    <section>
      <header className={styles.header}>
        <h2>Search Results</h2>
      </header>
    </section>
    <div className={"pure-g"}>
      <div className={"pure-u-1"}>
        <div className={styles.contentContainer}>
          Search Results for "{searchString}"
        </div>
      </div>
    </div>
  </section>)
};

export default SearchResultsContainer;