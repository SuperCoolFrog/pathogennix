import React from 'react';
import classNames from 'classnames';
import styles from './fancy-quote.module.scss';

interface FancyQuoteProps {
  quoteText: string;
  quoteAuthor: string;
}

const FancyQuote = ({ quoteText, quoteAuthor }: FancyQuoteProps) => {
  return (
    <blockquote className={classNames("groucho", styles.blockquote)}>
      <span className={styles.openQuote}>&ldquo;</span>
      <span className={styles.text}>{quoteText}</span>
      <span className={styles.closeQuote}> &rdquo;</span>
      <footer className={styles.footer}>{quoteAuthor}</footer>
    </blockquote>
  );
}

export default FancyQuote;