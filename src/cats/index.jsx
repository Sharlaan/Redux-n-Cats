import React from 'react';

import './cats.styles.css';
import CatsSelector from './cats.selector';
import Cats from './cats.container';

export default () => (
  <article className="Cats">
    <CatsSelector />
    <Cats />
  </article>
);
