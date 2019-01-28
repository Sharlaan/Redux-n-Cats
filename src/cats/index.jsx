import React from 'react';
import Cats from './cats.container';
import styles from './cats.module.css';
import CatsSelector from './cats.selector';

export default () => (
  <article className={styles.main}>
    <CatsSelector />
    <Cats />
  </article>
);
