import React from 'react';
import Cats from './cats.container';
import styles from './cats.module.css';
import CatsProvider from './cats.provider';
import CatsSelector from './cats.selector';

export default () => (
  <article className={styles.main}>
    <CatsProvider>
      <CatsSelector />
      <Cats />
    </CatsProvider>
  </article>
);
